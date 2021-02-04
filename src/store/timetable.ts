import DateTime from '@/extensions/datetime'

export type ISOWeek = string

function toISOWeek (date: DateTime): ISOWeek {
  const weekDate = date.toISOWeekDate()
  return weekDate.split('-')
    .slice(0, 2)
    .join('')
}
const timetable = {
  state: {
    day: undefined as DateTime | undefined,
    timetables: new Map<number, number>()
  }
}
