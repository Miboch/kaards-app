import {KanbanStateModel} from '../interfaces/kanban-state.model';
import * as kanbanActions from '../actions/kanban.actions';

export const defaultKanbanState: KanbanStateModel = {
  foo: "Hi"
}

export function kanbanStateReducer(state = defaultKanbanState, action: kanbanActions.KanbanActions): KanbanStateModel {
  switch (action.type) {
    case kanbanActions.KanbanActionTypes.BASE_ACTION:
      return state;
  }
  return state;
}
