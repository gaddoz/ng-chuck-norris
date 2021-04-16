import { Component, OnInit } from '@angular/core';
import { FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.scss']
})
export class SampleFormComponent implements OnInit {
  sampleForm: FormGroup = new FormGroup({
    email1: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    email2: new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  addChildForm(name: string, group: FormGroup) {
    this.sampleForm.addControl(name, group);
    console.log('me at addChildForm',group);
  }

  onSubmitForm(): void {
    if (!this.sampleForm.valid) {
      this.sampleForm.markAllAsTouched();
      console.log('me at onSubmitForm not valid', this.sampleForm);
    } else {
      console.log('me at onSubmitForm', this.sampleForm.value);
    }
  }

}
