import { Component } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { LearningPackagesService } from '../../Services/LearningPackages/learning-packages-services.service';
import { LearningPackage } from '../../models/learning-package.model';
import { firstValueFrom } from 'rxjs';

@Component({
  standalone: true,
  selector: 'app-create-learning-package',
  imports: [FormsModule],
  templateUrl: './learning-package-create.component.html',
  styleUrls: ['./learning-package-create.component.css']
})
export class CreateLearningPackageComponent {
  learningPackage: LearningPackage = {
    title: '',
    description: '',
    category: '',
    targetAudience: '',
    difficultyLevel: 0,
  };

  constructor(private learningPackagesService: LearningPackagesService) {}

  // Method to submit the form data to the backend
  async onSubmit() {
    if (this.learningPackage.difficultyLevel !== null) {
      try {
        // Using firstValueFrom to convert the observable to a promise
        const response = await firstValueFrom(this.learningPackagesService.createLearningPackage(this.learningPackage));
        alert('Learning Package created successfully!');
        console.log(response);
      } catch (error) {
        console.error('Error creating learning package:', error);
        alert('Error creating learning package');
      }
    }
  }
}
