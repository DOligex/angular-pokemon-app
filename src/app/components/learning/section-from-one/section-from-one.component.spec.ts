import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFromOneComponent } from './section-from-one.component';

describe('SectionFromOneComponent', () => {
  let component: SectionFromOneComponent;
  let fixture: ComponentFixture<SectionFromOneComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFromOneComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFromOneComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
