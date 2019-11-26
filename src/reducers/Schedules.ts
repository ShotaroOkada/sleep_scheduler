import ScheduleState from "../states/Schedules";
import ScheduleAction from "../actions/Schedules/Action";
import ScheduleActionType from "../actions/Schedules/ActionType";

const initialState: ScheduleState = {
  schedules: [],
  copiedSchedule: {
    name: '',
    background: ''
  }
}

export default function scheduleState(state: ScheduleState = initialState, action: ScheduleAction) {
  switch (action.type) {
    case ScheduleActionType.CREATE_SCHEDULE:
      return {
        ...state,
        schedules: [
          ...state.schedules,
          action.payload
        ]
      }
    case ScheduleActionType.DELETE_SCHEDULE:
      return {
        ...state,
        schedules: [
          ...state.schedules.slice(0, action.payload.index),
          ...state.schedules.slice(action.payload.index + 1)
        ]
      }
    case ScheduleActionType.COPIED_SCHEDULE:
      return {
        ...state,
        copiedSchedule: {
          ...action.payload
        }
      }
    default:
      return state;
  }
}