import {Component, OnInit} from '@angular/core';
import {Store} from '@ngrx/store';
import {KanbanState} from '../../../store/interfaces/kanban-state';
import {setLoggedInState} from '../../../store/actions/user.action';

@Component({
  templateUrl: './login.component.html',
  styleUrls: ['./login.component.scss']
})

export class LoginComponent implements OnInit {
  constructor(private store: Store<KanbanState>) {
  }

  ngOnInit(): void {
    this.store.dispatch(setLoggedInState({loginState: false}))
  }
}
