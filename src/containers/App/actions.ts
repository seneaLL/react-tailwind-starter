import { action } from 'typesafe-actions';
import { ActionTypes } from './constants';

export const setLoading = (percent: number | null) =>
  action(ActionTypes.SET_LOADING, { percent });
