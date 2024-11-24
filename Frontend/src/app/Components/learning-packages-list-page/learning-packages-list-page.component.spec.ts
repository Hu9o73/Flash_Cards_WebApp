import { ComponentFixture, TestBed } from '@angular/core/testing';

import { LearningPackagesListPageComponent } from './learning-packages-list-page.component';

describe('LearningPackagesListPageComponent', () => {
  let component: LearningPackagesListPageComponent;
  let fixture: ComponentFixture<LearningPackagesListPageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [LearningPackagesListPageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(LearningPackagesListPageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
