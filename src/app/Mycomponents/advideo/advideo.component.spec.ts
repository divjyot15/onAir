import { ComponentFixture, TestBed } from '@angular/core/testing';

import { AdvideoComponent } from './advideo.component';

describe('AdvideoComponent', () => {
  let component: AdvideoComponent;
  let fixture: ComponentFixture<AdvideoComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      declarations: [ AdvideoComponent ]
    })
    .compileComponents();
  });

  beforeEach(() => {
    fixture = TestBed.createComponent(AdvideoComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
