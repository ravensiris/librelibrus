import { DateTime } from "luxon";

const timetable = {
    state:{
        day: undefined as DateTime | undefined,
        timetables: new Map<number, number>()
    },

}