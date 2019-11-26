import Schedules from "../states/Schedules";
import ScheduleAction from "../actions/Schedules/Action";
import ScheduleActionType from "../actions/Schedules/ActionType";

const initialState: Schedules = []

export default function schedules(state: Schedules = initialState, action: ScheduleAction) {
  switch (action.type) {
    case ScheduleActionType.CREATE_SCHEDULE:
      return [
        ...state,
        action.payload
      ]
    case ScheduleActionType.DELETE_SCHEDULE:
      return [
        ...state.slice(0, action.payload.taskIndex),
        ...state.slice(action.payload.taskIndex + 1)
      ]
    default:
      return state;
  }
}