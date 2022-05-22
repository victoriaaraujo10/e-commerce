import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FeedbackUsuarioComponent } from './feedback-usuario.component';

describe('FeedbackUsuarioComponent', () => {
  let component: FeedbackUsuarioComponent;
  let fixture: ComponentFixture<FeedbackUsuarioComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FeedbackUsuarioComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FeedbackUsuarioComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
