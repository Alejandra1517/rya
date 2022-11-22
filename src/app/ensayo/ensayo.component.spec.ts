import { ComponentFixture, TestBed } from '@angular/core/testing';

import { EnsayoComponent } from './ensayo.component';

describe('EnsayoComponent', () => {
  let component: EnsayoComponent;
  let fixture: ComponentFixture<EnsayoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ EnsayoComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(EnsayoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
