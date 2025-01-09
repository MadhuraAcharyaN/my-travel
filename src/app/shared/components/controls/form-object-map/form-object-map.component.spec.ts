import { ComponentFixture, TestBed } from '@angular/core/testing';

import { FormObjectMapComponent } from './form-object-map.component';

describe('FormObjectMapComponent', () => {
  let component: FormObjectMapComponent;
  let fixture: ComponentFixture<FormObjectMapComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [FormObjectMapComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(FormObjectMapComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
