import ScheduleState from "../states/Schedules";
import ScheduleAction from "../actions/Schedules/Action";
import ScheduleActionType from "../actions/Schedules/ActionType";

const initialState: ScheduleState = {
  schedules: [],
  copiedSchedule: {
    name: '',
    background: '',
    position: {
      x: 0,
      y: 0
    }
  },
}

export default function scheduleState(state: ScheduleState = initialState, action: ScheduleAction): ScheduleState {
  switch (action.type) {
    case ScheduleActionType.CREATE_SCHEDULE:
      return {
        ...state,
        schedules: [
          ...state.schedules,
          action.payload.schedule
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
    case ScheduleActionType.POSITION_CHANGE_SCHEDULE:
      return {
        ...state,
        schedules: [
          ...state.schedules.slice(0, action.payload.index),
          {
            name: state.schedules[action.payload.index].name,
            background: state.schedules[action.payload.index].background,
            position: action.payload.position
          },
          ...state.schedules.slice(action.payload.index + 1)
        ]
      }
    case ScheduleActionType.SIZE_CHANGE_SCHEDULE:
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
          ...action.payload.schedule
        }
      }
    default:
      return state;
  }
}