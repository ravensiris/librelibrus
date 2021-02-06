import { AuthenticationApi, Configuration } from '@/api'
import { MutationTree as MutationTreeT, ActionTree as ActionTreeT, GetterTree as GetterTreeT } from 'vuex'
import router from '@/router'

export interface State {
    token: string;
    status: string;
}

type ActionTree = ActionTreeT<State, State>
type MutationTree = MutationTreeT<State>
type GetterTree = GetterTreeT<State, State>

interface FormData {
    username: string;
    password: string;
}

const tokenStore = {
  state: () => ({
    token: localStorage.getItem('token') || '',
    status: ''
  }) as State,
  mutations: {
    setToken (state: State, token: string) {
      state.token = token
    },
    setStatus (state, status: string) {
      state.status = status
    }
  } as MutationTree,
  actions: {
    authorize ({ commit }, formData: FormData) {
      commit('setStatus', 'loading')
      const conf = new Configuration(formData)
      const authApi = new AuthenticationApi(conf)
      authApi.getAuthorizeToken().then(resp => {
        const token = resp.data.data.token
        commit('setToken', token)
        localStorage.setItem('token', token)
        commit('setStatus', 'success')
      }).catch(
        err => {
          const message = err.response?.data.message
          commit('setStatus', message || 'Unknown error')
        }
      )
    },
    logout ({ commit }) {
      commit('setToken', '')
      localStorage.removeItem('token')
      router.push('/')
    }
  } as ActionTree,
  getters: {
    authorized: state => !!state.token,
    status: state => state.status,
    loading: state => state.status === 'loading',
    message: state => state.status in ['loading', 'success'] ? '' : state.status
  } as GetterTree

}

export default tokenStore
