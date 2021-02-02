import { createStore } from 'vuex'
import router from '@/router'
import { LessonUnit, TimetableApi, Configuration } from '@/api'
import { exportDefaultSpecifier } from '@babel/types'

export default createStore({
  state: {
    isNavbarVisible: true,
    token: localStorage.getItem('token') || '',
    timetable: {
      updated: null as Date | null,
      units: [] as LessonUnit[]
    }
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
    },
    setTimetable (state, units: LessonUnit[]) {
      state.timetable.units = units
      state.timetable.updated = new Date()
    },
    clearTimetable (state) {
      state.timetable.updated = null
      state.timetable.units = []
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
    },
    getTimetable ({ commit, dispatch, state }) {
      const now = new Date()
      const updated = state.timetable.updated
      if (updated !== null) {
        const delta = (now.valueOf() - updated.valueOf()) / 1000
        if (delta < 120) { return }
      }

      const conf = new Configuration({ apiKey: state.token })
      const timetableApi = new TimetableApi(conf)
      timetableApi
        .getLessonUnits()
        .then(resp => {
          const data = resp.data.data!
          commit('setTimetable', data.units)
        })
        .catch(err => {
          if (err.response) {
            dispatch('clearToken')
          }
        })
    },
    updateTimetable ({ commit, dispatch }) {
      commit('clearTimetable')
      dispatch('getTimetable')
    }
  },
  getters: {
    isNavbarVisible: state => state.isNavbarVisible,
    isAuthorized: state => !!state.token,
    timetable: state => state.timetable.units,
    timetableUpdated: state => state.timetable.updated
  },
  modules: {}
})
