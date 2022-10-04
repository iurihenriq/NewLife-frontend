import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MoradoresDatailsComponent } from './moradores-datails.component';

describe('MoradoresDatailsComponent', () => {
  let component: MoradoresDatailsComponent;
  let fixture: ComponentFixture<MoradoresDatailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MoradoresDatailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MoradoresDatailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
