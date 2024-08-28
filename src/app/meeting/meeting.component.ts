import { Component } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-meeting',
  templateUrl: './meeting.component.html',
  styleUrls: ['./meeting.component.css']
})
export class MeetingComponent {
  meetingForm: FormGroup;

  constructor() {
    this.meetingForm = new FormGroup({
      clientName: new FormControl('', [Validators.required]),
      meetingDate: new FormControl('', [Validators.required]),
      notes: new FormControl('')
    });
  }

  onSubmit() {
    if (this.meetingForm.valid) {
      console.log(this.meetingForm.value);
      // Handle form submission logic here
    }
  }

  get clientName() { return this.meetingForm.get('clientName'); }
  get meetingDate() { return this.meetingForm.get('meetingDate'); }
  get notes() { return this.meetingForm.get('notes'); }
}

