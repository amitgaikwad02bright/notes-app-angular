import {
  Component,
  OnInit,
  Input,
  ViewChild,
  ElementRef,
  Output,
  EventEmitter
} from '@angular/core';
import { NoteListService } from '../services/notelist.service';
import { Note } from '../models/Note';

@Component({
  selector: 'note',
  templateUrl: './note.component.html'
})
export class NoteComponent {
  @Input()
  note: Note;
  editingNote: boolean;
  updatedNoteText: String;
  @Output()
  onNoteUpdateSuccess: EventEmitter<Note> = new EventEmitter();
  @Output()
  onNoteDeleteSuccess: EventEmitter<Note> = new EventEmitter();

  constructor(private noteListSerivce: NoteListService) {}
  @ViewChild('textarea', { read: ElementRef }) textArea: ElementRef;
  onNoteClick() {
    this.editingNote = true;
    this.updatedNoteText = this.note.text;
    setTimeout(() => {
      this.textArea.nativeElement.focus();
    });
  }

  onNoteTextBlur() {
    if (this.updatedNoteText !== this.note.text) {
      this.noteListSerivce
        .updateNote(this.note.id, this.updatedNoteText)
        .subscribe({
          next: (updatedNote: Note) => {
            this.onNoteUpdateSuccess.emit(updatedNote);
          },
          error: err => {
            alert('Error in updating note!!');
          }
        });
    }
    this.editingNote = false;
  }

  delteNote(id, e) {
    this.noteListSerivce.deleteNote(id).subscribe({
      next: () => {
        this.onNoteDeleteSuccess.emit(this.note);
      },
      error: err => {
        alert('Error in deleting note!!');
      }
    });
    e.stopPropagation();
    e.preventDefault();
  }
}
