import { createStore } from 'vuex'
import router from '@/router'
export default createStore({
  state: {
    isNavbarVisible: true,
    token: localStorage.getItem('token') || ''
  },
  mutations: {
    setNavbarVisible (state, isVisible: boolean) {
      state.isNavbarVisible = isVisible
    },
    setToken (state, token: string) {
      state.token = token
      localStorage.setItem('token', token)
    },
    clearToken (state) {
      state.token = ''
      localStorage.removeItem('token')
    }
  },
  actions: {
    setNavbarVisible ({ commit }, isVisible: boolean) {
      commit('setNavbarVisible', isVisible)
    },
    setToken ({ commit, dispatch }, token: string) {
      commit('setToken', token)
      dispatch('setNavbarVisible', true)
      router.push('/')
    },
    clearToken ({ commit, dispatch }) {
      commit('clearToken')
      dispatch('setNavbarVisible', false)
      router.push('/login')
    }
  },
  modules: {}
})
