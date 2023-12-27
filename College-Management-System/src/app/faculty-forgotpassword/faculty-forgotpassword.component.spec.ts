import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FacultyForgotpasswordComponent } from './faculty-forgotpassword.component';

describe('FacultyForgotpasswordComponent', () => {
  let component: FacultyForgotpasswordComponent;
  let fixture: ComponentFixture<FacultyForgotpasswordComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [FacultyForgotpasswordComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(FacultyForgotpasswordComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
