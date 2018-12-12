import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { EaCompLibComponent } from './ea-comp-lib.component';

describe('EaCompLibComponent', () => {
  let component: EaCompLibComponent;
  let fixture: ComponentFixture<EaCompLibComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ EaCompLibComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(EaCompLibComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
