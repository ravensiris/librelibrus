import { createStore, ModuleTree } from 'vuex'
import token from '@/store/token'
import timetable from '@/store/timetable'

export interface Getters{
  test: string;
}

export default createStore({
  modules: {
    timetable,
    token
  } as ModuleTree<any>
})
