import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShubhamNJComponent } from './shubham-nj.component';

describe('ShubhamNJComponent', () => {
  let component: ShubhamNJComponent;
  let fixture: ComponentFixture<ShubhamNJComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShubhamNJComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShubhamNJComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
