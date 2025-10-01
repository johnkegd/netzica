import { ComponentFixture, TestBed } from '@angular/core/testing';

import { SimpleBanner } from './simple-banner';

describe('SimpleBanner', () => {
  let component: SimpleBanner;
  let fixture: ComponentFixture<SimpleBanner>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [SimpleBanner]
    })
    .compileComponents();

    fixture = TestBed.createComponent(SimpleBanner);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
