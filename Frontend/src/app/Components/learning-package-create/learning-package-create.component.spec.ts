import { ComponentFixture, TestBed } from '@angular/core/testing';

import { CreateLearningPackageComponent } from './learning-package-create.component';

describe('LearningPackageCreateComponent', () => {
  let component: CreateLearningPackageComponent;
  let fixture: ComponentFixture<CreateLearningPackageComponent>;

  beforeEach(async () => {
    await TestBed.configureTestingModule({
      imports: [CreateLearningPackageComponent]
    })
    .compileComponents();

    fixture = TestBed.createComponent(CreateLearningPackageComponent);
    component = fixture.componentInstance;
    fixture.detectChanges();
  });

  it('should create', () => {
    expect(component).toBeTruthy();
  });
});
