import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import {FormsModule} from '@angular/forms'
import { HttpModule } from '@angular/http';
import {InlineEditorModule} from 'ng2-inline-editor';

import { AppComponent } from './app.component';
import {TasksComponent} from "./tasks/tasks.component";

@NgModule({
  declarations: [ AppComponent, TasksComponent ],
  imports: [ BrowserModule, HttpModule, FormsModule, InlineEditorModule ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
