import { Component } from '@angular/core';
import {RouterModule, RouterLink} from '@angular/router';

@Component({
  selector: 'app-lesson-list-page',
  standalone: true,
  imports: [ RouterModule, RouterLink],
  templateUrl: './lesson-list-page.component.html',
  styleUrl: './lesson-list-page.component.css'
})
export class LessonListPageComponent {
  
}
