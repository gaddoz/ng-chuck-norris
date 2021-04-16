import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SampleFormElementFooComponent } from './sample-form-element-foo.component';

describe('SampleFormElementFooComponent', () => {
  let component: SampleFormElementFooComponent;
  let fixture: ComponentFixture<SampleFormElementFooComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ SampleFormElementFooComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(SampleFormElementFooComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
