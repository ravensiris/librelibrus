import { createStore } from 'vuex'
import router from '@/router'
import { LessonUnit, TimetableApi, Configuration, UnitsDataField } from '@/api'
import { DateTime } from 'luxon'

type ISOWeek = string;
type ISOWeekWithoutDay = string;

interface Timetable {
  updated: DateTime;
  units: Array<LessonUnit>;
}

function justISOWeek (week: ISOWeek): ISOWeekWithoutDay {
  return week
    .split('-')
    .slice(0, 2)
    .join('')
}

export default createStore({
  state: {
    isNavbarVisible: true,
    token: localStorage.getItem('token') || '',
    weeks: new Map<ISOWeekWithoutDay, Timetable>(),
    currentWeek: undefined as ISOWeekWithoutDay | undefined,
    currentDay: undefined as DateTime | undefined
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
    addWeek (state, week: UnitsDataField) {
      const units = week.units
      const updated = DateTime.local()
      state.weeks.set(week.week, { units, updated })
    },
    setWeek (state, week: ISOWeekWithoutDay) {
      state.currentWeek = week
    },
    setDay (state, day: DateTime) {
      state.currentDay = day
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
    getWeek ({ commit, state }, week: ISOWeek) {
      const conf = new Configuration({ apiKey: state.token })
      const timetableApi = new TimetableApi(conf)
      timetableApi
        .getLessonUnits_1(week)
        .then(resp => {
          commit('addWeek', resp.data.data)
        })
        .catch(err => {
          throw err
        })
    },
    setWeek ({ commit, dispatch, state }, week: ISOWeek) {
      const justWeek = justISOWeek(week)
      if (!state.weeks.has(justWeek)) {
        dispatch('getWeek', week)
      }
      commit('setWeek', justWeek)
    },
    updateWeek ({ state, dispatch }) {
      if (!state.currentWeek) {
        throw Error('Set the week first!')
      }
      dispatch('getWeek', justISOWeek(state.currentWeek))
    },
    setDay ({ commit, dispatch }, day: DateTime) {
      commit('setDay', day)
      dispatch('setWeek', day.toISOWeekDate())
    }
  },
  getters: {
    isNavbarVisible: state => state.isNavbarVisible,
    isAuthorized: state => !!state.token,
    week: (state, getters): Array<LessonUnit> => {
      const currentWeek = getters.currentWeek
      return state.weeks.get(currentWeek)?.units!
    },
    currentDay: state => {
      if (!state.currentDay) {
        throw Error('Set the day first!')
      }
      return state.currentDay
    },
    currentWeek: state => {
      if (!state.currentWeek) {
        throw Error('Set the week first!')
      }
      return state.currentWeek
    },
    day: (state, getters): Array<LessonUnit> | undefined => {
      const currentDay = getters.currentDay
      const units = getters.week as Array<LessonUnit>
      if (!units) { return [] }
      return units.filter(unit => {
        const day = DateTime.fromISO(unit.start)
        return day.day === currentDay.day
      })
    }
  },
  modules: {}
})
