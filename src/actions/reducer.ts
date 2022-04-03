import { Reducers, Reducer } from 'types/reducers';
import { ContainerState, ContainerActions } from './types';
import { ActionTypes } from './constants';

export const initialState: ContainerState = {
  isLoading: false,
};

type ReducerActions = ContainerActions;

const reducers: Partial<Reducers<ReducerActions, ContainerState>> = {
  [ActionTypes.SET_LOADING]: payload => state => ({
    ...state,
    isLoading: payload.isLoading,
  }),
};

function appReducer(
  state: ContainerState = initialState,
  action: ContainerActions,
): ContainerState {
  const { type, payload } = action;

  const reducer:
    | undefined
    | Reducer<typeof type, ContainerActions, ContainerState> = reducers[type];

  return reducer ? reducer(payload)(state) : state;
}

export default appReducer;
