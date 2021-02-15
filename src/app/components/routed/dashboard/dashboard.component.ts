import {Component, OnInit} from '@angular/core';
import {KanbanState} from '../../../store/interfaces/kanban-state';
import {Store} from '@ngrx/store';
import * as kanbanSelectors from '../../../store/selectors/kanban.selector';


@Component({
  templateUrl: './dashboard.component.html',
  styleUrls: ['./dashboard.component.scss']
})

export class DashboardComponent implements OnInit {

  constructor(private store: Store<KanbanState>) {
  }

  ngOnInit(): void {
    this.store.select(kanbanSelectors.getFoo).subscribe(r => console.log(r));
  }
}
