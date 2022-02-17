import * as actions from './actions';

import { ActionType } from 'typesafe-actions';

interface AppState {
  loading: number | null;
}

/* --- ACTIONS --- */
type AppActions = ActionType<typeof actions>;

/* --- EXPORTS --- */

export type ContainerState = AppState;
export type ContainerActions = AppActions;