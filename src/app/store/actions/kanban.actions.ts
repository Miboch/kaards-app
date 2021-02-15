import {Action} from '@ngrx/store';

export enum KanbanActionTypes {
  BASE_ACTION = "BASE ACTION"
}

export class BaseAction implements Action {
  readonly type = KanbanActionTypes.BASE_ACTION
  constructor() {
  }
}

export type KanbanActions = BaseAction;
