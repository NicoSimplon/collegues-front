import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { AjoutCollegueComponent } from './ajout-collegue.component';

describe('AjoutCollegueComponent', () => {
  let component: AjoutCollegueComponent;
  let fixture: ComponentFixture<AjoutCollegueComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ AjoutCollegueComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(AjoutCollegueComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
