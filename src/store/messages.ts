import { Configuration, ErrorModel, ListMessagesDataField, ListMessagesFailModel, MessageBrief, MessagesApi } from '@/api'
import { State as TokenState } from '@/store/token'
import { MutationTree as MutationTreeT, ActionTree as ActionTreeT, GetterTree as GetterTreeT } from 'vuex'

type Messages = Array<MessageBrief>

export interface State {
  pages: Map<number, Messages>;
  currentPage: number;
  maxPage: number;
  token: TokenState;
}

type ActionTree = ActionTreeT<State, State>
type MutationTree = MutationTreeT<State>
type GetterTree = GetterTreeT<State, State>

const messagesStore = {
  namespaced: true,
  state: () => ({
    pages: new Map<number, Messages>(),
    currentPage: 0,
    maxPage: 0
  }) as State,
  mutations: {
    setPage (state, page: ListMessagesDataField) {
      const pageInfo = page.pageInfo
      const messages = page.messages
      state.currentPage = pageInfo.current
      state.maxPage = pageInfo.max_page
      state.pages.set(pageInfo.current, messages)
    }

  } as MutationTree,
  actions: {
    setPage ({ commit, state, rootState, dispatch }, page?: number) {
      const conf = new Configuration({ apiKey: rootState.token.token })
      const messagesApi = new MessagesApi(conf)
      if (!page) {
        page = state.currentPage
      }
      messagesApi.getListMessages(page).then(
        resp => {
          const data = resp.data.data
          commit('setPage', data)
        }
      ).catch(err => {
        const resp = (err.response as ListMessagesFailModel | ErrorModel)
        if ((resp as ListMessagesFailModel).data.token) {
          dispatch('logout', undefined, { root: true })
          throw err
        } else if ((resp as ListMessagesFailModel).data.page) {
          // Avoid stack overflow in case of server side failure
          if (page !== 0) {
            dispatch('setPage', 0)
          } else {
            throw Error('First page out of bounds. Likely server side error.')
          }
        } else {
          // Auth errors
          dispatch('logout', undefined, { root: true })
          throw err
        }
      })
    }
  } as ActionTree,
  getters: {
    messages: state => state.pages.get(state.currentPage)
  } as GetterTree
}

export default messagesStore
