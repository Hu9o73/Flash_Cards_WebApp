import { Component } from '@angular/core';
import { CommonModule } from '@angular/common';
import { LearningPackagesService } from '../../Services/LearningPackages/learning-packages-services.service';
import { Observable } from 'rxjs';

@Component({
  selector: 'app-learning-packages-list-page',
  standalone: true,
  imports: [CommonModule],
  templateUrl: './learning-packages-list-page.component.html',
  styleUrl: './learning-packages-list-page.component.css',
})

export class LearningPackagesListPageComponent {
  learningPackages$: Observable<any[]>;

  constructor(private LearningPackagesService: LearningPackagesService) {
    this.learningPackages$ = this.LearningPackagesService.getAllPackages();
  }
}
