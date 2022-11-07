import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ThanksNoteComponent } from './thanks-note.component';

describe('ThanksNoteComponent', () => {
  let component: ThanksNoteComponent;
  let fixture: ComponentFixture<ThanksNoteComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ThanksNoteComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(ThanksNoteComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
