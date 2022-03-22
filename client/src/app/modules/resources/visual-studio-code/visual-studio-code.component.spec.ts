import { ComponentFixture, TestBed } from '@angular/core/testing';

import { VisualStudioCodeComponent } from './visual-studio-code.component';

describe('VisualStudioCodeComponent', () => {
  let component: VisualStudioCodeComponent;
  let fixture: ComponentFixture<VisualStudioCodeComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ VisualStudioCodeComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(VisualStudioCodeComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
