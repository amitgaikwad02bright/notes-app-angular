import { Component, OnInit, ViewChild, ElementRef } from '@angular/core';
import { NoteListService } from '../services/notelist.service';
import { Note } from '../models/Note';

@Component({
  selector: 'note-list',
  templateUrl: './notelist.component.html',
  styleUrls: ['./notelist.component.css'],
  providers: [NoteListService]
})
export class NoteListComponent implements OnInit {
  noteList;
  editingNewNote: boolean;
  newNoteText: string;

  @ViewChild('textarea', { read: ElementRef }) textArea: ElementRef;

  constructor(private noteListSerivce: NoteListService) {}

  ngOnInit() {
    this.getNoteList();
  }

  getNoteList() {
    this.noteListSerivce.getNotes().subscribe({
      next: noteList => {
        this.noteList = noteList;
        console.log(noteList);
      },
      error: err => console.log(err)
    });
  }

  onNewNoteClick() {
    this.editingNewNote = true;
    setTimeout(() => {
      this.textArea.nativeElement.focus();
    });
  }

  onNewNoteTextBlur() {
    if (this.newNoteText) {
      this.noteListSerivce.addNewNote(this.newNoteText);
      this.getNoteList();
    }
    this.newNoteText = '';
    this.editingNewNote = false;
  }

  saveNewNote() {}
}
