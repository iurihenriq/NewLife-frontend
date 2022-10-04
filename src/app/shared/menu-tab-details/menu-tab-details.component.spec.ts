import { ComponentFixture, TestBed } from '@angular/core/testing';

import { MenuTabDetailsComponent } from './menu-tab-details.component';

describe('MenuTabDetailsComponent', () => {
  let component: MenuTabDetailsComponent;
  let fixture: ComponentFixture<MenuTabDetailsComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ MenuTabDetailsComponent ]
    })
    .compileComponents();

    fixture = TestBed.createComponent(MenuTabDetailsComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
