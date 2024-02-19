import { ComponentFixture, TestBed } from '@angular/core/testing';

import { PasswordUpdateSuccessfulyComponent } from './password-update-successfuly.component';

describe('PasswordUpdateSuccessfulyComponent', () => {
  let component: PasswordUpdateSuccessfulyComponent;
  let fixture: ComponentFixture<PasswordUpdateSuccessfulyComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [PasswordUpdateSuccessfulyComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(PasswordUpdateSuccessfulyComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
