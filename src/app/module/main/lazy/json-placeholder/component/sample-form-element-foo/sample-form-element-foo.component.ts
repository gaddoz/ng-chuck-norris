import { Component, EventEmitter, OnInit, Output } from '@angular/core';
import { FormBuilder, FormControl, FormGroup, Validators } from '@angular/forms';

@Component({
  selector: 'app-sample-form-element-foo',
  templateUrl: './sample-form-element-foo.component.html',
  styleUrls: ['./sample-form-element-foo.component.scss']
})
export class SampleFormElementFooComponent implements OnInit {
  @Output() formReady = new EventEmitter<FormGroup>();
  form: FormGroup = this.fb.group({});

  constructor(private fb: FormBuilder) {}

 ngOnInit() {
    this.form.addControl('fooEmail', new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]));
    this.form.addControl('barEmail', new FormControl('', [
      Validators.required,
      Validators.email,
      Validators.pattern('^[a-z0-9._%+-]+@[a-z0-9.-]+\\.[a-z]{2,4}$'),
    ]));
    this.formReady.emit(this.form);
  }

}
