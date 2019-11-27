export type SchedulePosition = {
  x: number,
  y: number
}

export type Schedule = {
  name: string,
  background: string,
  position: SchedulePosition,
}

type ScheduleState = {
  schedules: Schedule[];
  copiedSchedule: Schedule;
}

export default ScheduleState