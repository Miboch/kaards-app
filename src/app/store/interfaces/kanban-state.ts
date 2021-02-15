import {KanbanStateModel} from './kanban-state.model';
import {UserStateModel} from './user-state.model';

export interface KanbanState {
  kanban: KanbanStateModel,
  user: UserStateModel
}
