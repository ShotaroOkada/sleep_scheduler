import { createAction } from 'typesafe-actions';
import { Schedule, SchedulePosition } from '../../states/Schedules';
import ScheduleActionType from './ActionType';

export const createSchedule = createAction(
  ScheduleActionType.CREATE_SCHEDULE
)<{ schedule: Schedule }>();

export const deleteSchedule = createAction(
  ScheduleActionType.DELETE_SCHEDULE
)<{ index: number }>();

export const copiedSchedule = createAction(
  ScheduleActionType.COPIED_SCHEDULE
)<{ schedule: Schedule }>();

export const positionChangeSchedule = createAction(
  ScheduleActionType.POSITION_CHANGE_SCHEDULE
)<{ index: number, position: SchedulePosition }>();

export const sizeChangeSchedule = createAction(
  ScheduleActionType.SIZE_CHANGE_SCHEDULE
)<{ index: number, position: SchedulePosition }>();