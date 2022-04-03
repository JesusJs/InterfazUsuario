import { ComponentFixture, TestBed } from '@angular/core/testing';

import { NavbarEcomerceComponent } from './navbar-ecomerce.component';

describe('NavbarEcomerceComponent', () => {
  let component: NavbarEcomerceComponent;
  let fixture: ComponentFixture<NavbarEcomerceComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ NavbarEcomerceComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(NavbarEcomerceComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
