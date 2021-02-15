import {KanbanState} from '../interfaces/kanban-state';
import {ActionReducerMap, createFeatureSelector} from '@ngrx/store';
import {kanbanStateReducer} from './kanban.reducer';
import {KanbanStateModel} from '../interfaces/kanban-state.model';
import {UserStateModel} from '../interfaces/user-state.model';
import {userStateReducer} from './user.reducer';

export const kanbanReducers: ActionReducerMap<KanbanState> = {
  kanban: kanbanStateReducer,
  user: userStateReducer
}

export const getKanbanState = createFeatureSelector<KanbanStateModel>(
  'kanban'
);

export const getUserState = createFeatureSelector<UserStateModel>(
  'user'
);
