import { ComponentFixture, TestBed } from '@angular/core/testing';

import { ShuxtonComponent } from './shuxton.component';

describe('ShuxtonComponent', () => {
  let component: ShuxtonComponent;
  let fixture: ComponentFixture<ShuxtonComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ ShuxtonComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(ShuxtonComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
