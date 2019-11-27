export type SchedulePosition = {
  x: number,
  y: number
}

export type ScheduleSize = {
  width: string | null,
  height: string | null
}

export type Schedule = {
  name: string,
  background: string,
  position: SchedulePosition,
  size: ScheduleSize
}

type ScheduleState = {
  schedules: Schedule[];
  copiedSchedule: Schedule;
}

export default ScheduleState