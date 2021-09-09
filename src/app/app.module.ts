import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';

import { HttpClientModule, HttpClient } from '@angular/common/http';
import { AppComponent } from './app.component';
import { NoteListComponent } from './notelist/notelist.component';
import { NoteComponent } from './notelist/note.component';

@NgModule({
  imports: [BrowserModule, FormsModule, HttpClientModule],
  declarations: [AppComponent, NoteListComponent, NoteComponent],
  bootstrap: [AppComponent]
})
export class AppModule {}
