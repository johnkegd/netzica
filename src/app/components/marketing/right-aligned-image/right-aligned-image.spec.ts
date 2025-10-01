import { ComponentFixture, TestBed } from '@angular/core/testing';

import { RightAlignedImage } from './right-aligned-image';

describe('RightAlignedImage', () => {
  let component: RightAlignedImage;
  let fixture: ComponentFixture<RightAlignedImage>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [RightAlignedImage]
    })
    .compileComponents();

    fixture = TestBed.createComponent(RightAlignedImage);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
