import { async, ComponentFixture, TestBed } from '@angular/core/testing';

import { UpdateAlumnoComponent } from './update-alumno.component';

describe('UpdateAlumnoComponent', () => {
  let component: UpdateAlumnoComponent;
  let fixture: ComponentFixture<UpdateAlumnoComponent>;

  beforeEach(async(() => {
    TestBed.configureTestingModule({
      declarations: [ UpdateAlumnoComponent ]
    })
    .compileComponents();
  }));

  beforeEach(() => {
    fixture = TestBed.createComponent(UpdateAlumnoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should be created', () => {
    expect(component).toBeTruthy();
  });
});
