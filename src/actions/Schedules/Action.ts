import * as ActionCreators from './ActionCreator'
import { ActionType } from 'typesafe-actions'

type ScheduleAction = ActionType<typeof ActionCreators>

export default ScheduleAction;