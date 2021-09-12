import { Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Note } from '../models/Note';
import { of } from 'rxjs';
import { max } from 'rxjs/operators';

@Injectable()
export class NoteListService {
 // notes: Note[] = [];
  apiUrl = 'https://gkwon.sse.codesandbox.io/postit/';

  constructor(private http: HttpClient) {}

  getNotes() {
    return this.http.get(this.apiUrl + 'all');
    // return of(this.notes);
  }

  addNewNote(newNoteText) {
   // const maxId = Math.max(...this.notes.map(n => n.id));
   // this.notes.push({ id: maxId + 1, text: newNoteText });
   const body=JSON.stringify({ text: newNoteText });
   const headers = { 'content-type': 'application/json'}
   return this.http.post(this.apiUrl + 'add', body, {'headers':headers});
  }

  updateNote(id, newText) {
    //const note = this.notes.find(n => n.id === id);
    //note.text = newText;
    const headers = { 'content-type': 'application/json'}
    const body=JSON.stringify({ text: newText });
    return this.http.put(this.apiUrl + 'update/'+id,  body, {'headers':headers});
  }

  deleteNote(id) {
    //const noteIndex = this.notes.findIndex(n => n.id === id);
    //this.notes.splice(noteIndex, 1);
    return this.http.delete(this.apiUrl + 'delete/'+id,);
  }
}
