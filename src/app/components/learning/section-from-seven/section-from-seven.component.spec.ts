import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { SectionFromSevenComponent } from './section-from-seven.component';

describe('SectionFromSevenComponent', () => {
  let component: SectionFromSevenComponent;
  let fixture: ComponentFixture<SectionFromSevenComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ SectionFromSevenComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(SectionFromSevenComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
