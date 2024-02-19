import { ComponentFixture, TestBed } from '@angular/core/testing';

import { TransitionSpinerComponent } from './transition-spiner.component';

describe('TransitionSpinerComponent', () => {
  let component: TransitionSpinerComponent;
  let fixture: ComponentFixture<TransitionSpinerComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [TransitionSpinerComponent]
    })
    .compileComponents();
    
    fixture = TestBed.createComponent(TransitionSpinerComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
