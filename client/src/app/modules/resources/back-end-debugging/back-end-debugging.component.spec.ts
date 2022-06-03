import { ComponentFixture, TestBed } from '@angular/core/testing';

import { BackEndDebuggingComponent } from './back-end-debugging.component';

describe('BackEndDebuggingComponent', () => {
  let component: BackEndDebuggingComponent;
  let fixture: ComponentFixture<BackEndDebuggingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ BackEndDebuggingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(BackEndDebuggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
