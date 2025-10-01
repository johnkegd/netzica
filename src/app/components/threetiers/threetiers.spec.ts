import { ComponentFixture, TestBed } from '@angular/core/testing';

import { Threetiers } from './threetiers';

describe('Threetiers', () => {
  let component: Threetiers;
  let fixture: ComponentFixture<Threetiers>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [Threetiers]
    })
    .compileComponents();

    fixture = TestBed.createComponent(Threetiers);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
