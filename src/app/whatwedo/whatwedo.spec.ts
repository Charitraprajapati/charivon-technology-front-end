import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Whatwedo } from './whatwedo';

describe('Whatwedo', () => {
  let component: Whatwedo;
  let fixture: ComponentFixture<Whatwedo>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Whatwedo],
    }).compileComponents();

    fixture = TestBed.createComponent(Whatwedo);
    component = fixture.componentInstance;
    await fixture.whenStable();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
