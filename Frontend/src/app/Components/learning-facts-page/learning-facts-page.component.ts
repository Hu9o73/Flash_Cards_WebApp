import { Component, OnInit } from '@angular/core';
import { CommonModule } from '@angular/common';
import { Router, ActivatedRoute } from '@angular/router';
import { LearningPackagesService } from '../../Services/LearningPackages/learning-packages-services.service';
import { Observable } from 'rxjs';
import { map } from 'rxjs';
import { FormsModule } from '@angular/forms';

@Component({
  selector: 'app-learning-facts-page',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './learning-facts-page.component.html',
  styleUrls: ['./learning-facts-page.component.css'],
})
export class LearningFactsPageComponent implements OnInit {
  learningFacts$!: Observable<any[]>;
  packageName$!: Observable<string>;
  packageId!: number;
  newFactContent: string = '';
  addFactResponse$!: Observable<any>;  // Observable to handle response from the add fact API

  constructor(
    private route: ActivatedRoute,
    private learningPackagesService: LearningPackagesService,
    private router: Router
  ) {}

  ngOnInit(): void {
    this.packageId = Number(this.route.snapshot.paramMap.get('packageId')); // Get the packageId from route
    this.learningFacts$ = this.learningPackagesService.getLearningFacts(this.packageId); // Fetch the facts
    this.packageName$ = this.learningPackagesService.getPackageById(this.packageId).pipe(
      map(packageDetails => packageDetails.title) // Extracting the title of the package
    );
  }


  onSubmit(): void {
    // Check if content is provided
    if (!this.newFactContent) {
      return;
    }

    // Call the addLearningFact method and update the response observable
    this.addFactResponse$ = this.learningPackagesService.addLearningFact(this.packageId, this.newFactContent);

    // Optionally, you could trigger an update of the facts list or reset the input after successful POST.
    this.addFactResponse$.subscribe(() => {
      // Refresh the facts list by re-fetching
      this.learningFacts$ = this.learningPackagesService.getLearningFacts(this.packageId);

      // Reset the form after submission
      this.newFactContent = '';
    });
  }

}
