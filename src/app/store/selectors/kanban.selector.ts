import {createSelector, MemoizedSelector} from '@ngrx/store';
import {getKanbanState} from '../reducers';
import {KanbanStateModel} from '../interfaces/kanban-state.model';


export const getFoo: MemoizedSelector<object, any> = createSelector(
  getKanbanState,
  (state: KanbanStateModel) => state.foo
);
