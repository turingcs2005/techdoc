import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FrontEndDebuggingComponent } from './front-end-debugging.component';

describe('FrontEndDebuggingComponent', () => {
  let component: FrontEndDebuggingComponent;
  let fixture: ComponentFixture<FrontEndDebuggingComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ FrontEndDebuggingComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(FrontEndDebuggingComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
