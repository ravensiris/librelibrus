import { createStore, ModuleTree } from 'vuex'
import token from '@/store/token'
import timetable from '@/store/timetable'
import messages from '@/store/messages'

export interface Getters{
  test: string;
}

export default createStore({
  modules: {
    timetable,
    token,
    messages
  } as ModuleTree<any>
})
