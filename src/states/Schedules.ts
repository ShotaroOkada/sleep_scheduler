export type Schedule = {
  name: string,
  background: string
}

type ScheduleState = {
  schedules: Schedule[]
  copiedSchedule: Schedule;
}

export default ScheduleState