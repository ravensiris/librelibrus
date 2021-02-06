import { Configuration, LessonUnit, TimetableApi, UnitsDataField } from '@/api'
import { DateTime } from 'luxon'
import { State as TokenState } from '@/store/token'
import { MutationTree as MutationTreeT, ActionTree as ActionTreeT, GetterTree as GetterTreeT } from 'vuex'

export type ISOWeek = string

export function toISOWeek (date: DateTime): ISOWeek {
  const weekDate = date.toISOWeekDate()
  return weekDate.split('-')
    .slice(0, 2)
    .join('')
}

interface Timetable{
  updated: DateTime;
  units: Array<LessonUnit>;
}
export interface State {
  day: DateTime;
  timetables: Map<ISOWeek, Timetable>;
  // Add global states here
  token: TokenState;
}

type ActionTree = ActionTreeT<State, State>
type MutationTree = MutationTreeT<State>
type GetterTree = GetterTreeT<State, State>

const timetableStore = {
  namespaced: true,
  state: () => ({
    day: DateTime.local(),
    timetables: new Map<ISOWeek, Timetable>()
  }) as State,
  mutations: {
    week (state, data: UnitsDataField) {
      const timetable = { updated: DateTime.local(), units: data.units }
      state.timetables.set(data.week, timetable)
    },
    day (state, day: DateTime) {
      state.day = day
    }
  } as MutationTree,
  actions: {
    loadWeek ({ commit, state, rootState, dispatch }, day?: DateTime) {
      const conf = new Configuration({ apiKey: rootState.token.token })
      const timetableApi = new TimetableApi(conf)
      timetableApi.getLessonUnits_1(toISOWeek(day || state.day)).then(resp => {
        const data = resp.data.data
        commit('week', data)
      }).catch(err => {
        dispatch('logout', undefined, { root: true })
        throw err
      })
    },
    setDay ({ commit }, day: DateTime) {
      commit('day', day)
    }
  } as ActionTree,
  getters: {
    dayUnits: state => state.timetables.get(toISOWeek(state.day))?.units.filter(
      unit => DateTime.fromISO(unit.start).day === state.day.day
    ),
    day: state => state.day,
    updated: state => state.timetables.get(toISOWeek(state.day))?.updated
  } as GetterTree
}

export default timetableStore
