import { createAction } from 'typesafe-actions';
import { Schedule } from '../../states/Schedules';
import ScheduleActionType from './ActionType';

export const createSchedule = createAction(
  ScheduleActionType.CREATE_SCHEDULE
)<Schedule>();

export const deleteSchedule = createAction(
  ScheduleActionType.DELETE_SCHEDULE
)<{ index: number }>();

export const copiedSchedule = createAction(
  ScheduleActionType.COPIED_SCHEDULE
)<Schedule>();