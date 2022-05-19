import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NodejsNpmComponent } from './nodejs-npm.component';

describe('NodejsNpmComponent', () => {
  let component: NodejsNpmComponent;
  let fixture: ComponentFixture<NodejsNpmComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NodejsNpmComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NodejsNpmComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
