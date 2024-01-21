import { Component } from '@angular/core';
import { NoteItemComponent } from '../note-item/note-item.component';

@Component({
  selector: 'app-notes',
  standalone: true,
  imports: [
    NoteItemComponent
  ],
  templateUrl: './notes.component.html',
  styleUrl: './notes.component.css'
})
export class NotesComponent {

}
