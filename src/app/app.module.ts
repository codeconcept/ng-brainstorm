import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { ReactiveFormsModule } from '@angular/forms';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import {DragDropModule} from '@angular/cdk/drag-drop';

import { HomeComponent } from './home/home.component';
import { WhiteBoardComponent } from './white-board/white-board.component';
import { IdeaFormComponent } from './idea-form/idea-form.component';

@NgModule({
  declarations: [
    AppComponent,
    HomeComponent,
    WhiteBoardComponent,
    IdeaFormComponent
  ],
  imports: [
    BrowserModule,
    AppRoutingModule,
    BrowserAnimationsModule,
    DragDropModule,
    ReactiveFormsModule
  ],
  providers: [],
  bootstrap: [AppComponent]
})
export class AppModule { }
