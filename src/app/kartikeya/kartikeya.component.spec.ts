import { ComponentFixture, TestBed } from '@angular/core/testing';

import { KartikeyaComponent } from './kartikeya.component';

describe('KartikeyaComponent', () => {
  let component: KartikeyaComponent;
  let fixture: ComponentFixture<KartikeyaComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ KartikeyaComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(KartikeyaComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
