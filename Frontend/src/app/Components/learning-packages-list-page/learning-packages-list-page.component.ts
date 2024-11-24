import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningPackagesService } from '../../Services/LearningPackages/learning-packages-services.service';
import { Observable } from 'rxjs';
import { Router } from '@angular/router';

@Component({
  selector: 'app-learning-packages-list-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learning-packages-list-page.component.html',
  styleUrl: './learning-packages-list-page.component.css',
})

export class LearningPackagesListPageComponent {
  learningPackages$: Observable<any[]>;

  constructor(
    private LearningPackagesService: LearningPackagesService,
    private router: Router
  ) {
    this.learningPackages$ = this.LearningPackagesService.getAllPackages();
  }

  // Method to show learning facts
  viewLearningFacts(packageId: number) {
    // Navigate to a new route that will display the facts for this package
    this.router.navigate(['/learning-facts/', packageId]);
  }

  // Refresh the packages
  refreshLearningPackages(): void {
    this.learningPackages$ = this.LearningPackagesService.getAllPackages();
  }

  // Delete a package
  deletePackage(packageId: number): void {
    if (confirm('Are you sure you want to delete this package?')) {
      this.LearningPackagesService.deletePackage(packageId).subscribe(() => {
        alert('Package deleted successfully!');
        this.refreshLearningPackages(); // Refresh the list after deletion
      });
    }
  }
}
