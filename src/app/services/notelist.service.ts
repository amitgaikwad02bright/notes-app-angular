import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../models/Note';
import { of } from 'rxjs';
import { max } from 'rxjs/operators';

@Injectable()
export class NoteListService {
  notes: Note[] = [];

  constructor(private http: HttpClient) {}

  getNotes() {
    //return this.http.get<Note>(this.apiUrl);
    return of(this.notes);
  }

  addNewNote(newNoteText) {
    const maxId = Math.max(...this.notes.map(n => n.id));
    this.notes.push({ id: maxId + 1, text: newNoteText });
  }

  updateNote(id, newText) {
    const note = this.notes.find(n => n.id === id);
    note.text = newText;
  }

  deleteNote(id) {
    const noteIndex = this.notes.findIndex(n => n.id === id);
    this.notes.splice(noteIndex, 1);
  }
}
