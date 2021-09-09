import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../models/Note';
import { of } from 'rxjs';
import { max } from 'rxjs/operators';

@Injectable()
export class NoteListService {
  apiUrl =
    'https://gist.githubusercontent.com/amitgaikwad02bright/74698a448c9bc472b4d84dc472e87217/raw/76ff49ef4ae3f34d71c1806814aedbfcd3c2a2ce/notelist.json';

  notes: Note[] = [
    {
      id: 1,
      text: 'first note'
    },
    {
      id: 2,
      text: 'this is  note'
    },
    {
      id: 3,
      text: 'first note'
    },
    {
      id: 4,
      text: 'this is  note'
    },
    {
      id: 5,
      text: 'first note'
    },
    {
      id: 6,
      text: 'this is  note'
    },
    {
      id: 7,
      text: 'first note'
    },
    {
      id: 8,
      text: 'this is  note'
    }
  ];

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
