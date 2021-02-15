import {NgModule} from '@angular/core';
import {BrowserModule} from '@angular/platform-browser';

import {AppRoutingModule} from './app-routing.module';
import {AppComponent} from './app.component';
import {StoreModule} from '@ngrx/store';
import {components, formComponents, routedComponents} from './components';
import {kanbanReducers} from './store/reducers';
import {guards} from './guards';
import {CommonModule} from '@angular/common';
import {FormsModule, ReactiveFormsModule} from '@angular/forms';

@NgModule({
  declarations: [
    AppComponent,
    ...routedComponents,
    ...components,
    ...formComponents
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    CommonModule,
    ReactiveFormsModule,
    FormsModule,
    StoreModule.forRoot(kanbanReducers)
  ],
  providers: [...guards],
  bootstrap: [AppComponent]
})
export class AppModule {
}
