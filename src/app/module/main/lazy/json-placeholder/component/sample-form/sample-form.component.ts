import { Component, OnInit } from '@angular/core';
import { UntypedFormControl, UntypedFormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample-form',
  templateUrl: './sample-form.component.html',
  styleUrls: ['./sample-form.component.scss']
})
export class SampleFormComponent implements OnInit {
  sampleForm: UntypedFormGroup = new UntypedFormGroup({
    email1: new UntypedFormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
    email2: new UntypedFormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]),
  });

  constructor() { }

  ngOnInit(): void {
  }

  addChildForm(name: string, group: UntypedFormGroup) {
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
