// routed
import {DashboardComponent} from './routed/dashboard/dashboard.component';
import {LoginComponent} from './routed/login/login.component';
import {KanbanComponent} from './routed/kanban/kanban.component';
import {ProfileComponent} from './routed/profile/profile.component';
import {SettingsComponent} from './routed/settings/settings.component';
// components
import {ToolbarComponent} from './toolbar/toolbar.component';


export const routedComponents = [
  DashboardComponent,
  LoginComponent,
  KanbanComponent,
  ProfileComponent,
  SettingsComponent
];

export const components = [
  ToolbarComponent
]

// routed
export * from './routed/dashboard/dashboard.component';
export * from './routed/login/login.component';
export * from './routed/kanban/kanban.component';
export * from './routed/profile/profile.component';
export * from './routed/settings/settings.component';
// components
export * from './toolbar/toolbar.component';
export * from './forms';
