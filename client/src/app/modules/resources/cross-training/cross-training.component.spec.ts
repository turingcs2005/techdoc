import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CrossTrainingComponent } from './cross-training.component';

describe('CrossTrainingComponent', () => {
  let component: CrossTrainingComponent;
  let fixture: ComponentFixture<CrossTrainingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ CrossTrainingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(CrossTrainingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
