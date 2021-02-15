import {Component, OnInit} from '@angular/core';

@Component({
  selector: 'kban-toolbar',
  templateUrl: './toolbar.component.html',
  styleUrls: ['./toolbar.component.scss']
})

export class ToolbarComponent implements OnInit {
  label = "Create New Board";
  constructor() {
  }

  ngOnInit(): void {
  }
}
