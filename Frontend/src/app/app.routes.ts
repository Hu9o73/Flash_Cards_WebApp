import { Routes } from '@angular/router';
import { LearningPackagesListPageComponent } from './Components/learning-packages-list-page/learning-packages-list-page.component';
import { CreateLearningPackageComponent } from './Components/learning-package-create/learning-package-create.component';
import { LearningFactsPageComponent } from './Components/learning-facts-page/learning-facts-page.component';

export const routes: Routes = [
    {path:'packages-list', component: LearningPackagesListPageComponent},
    {path:'create-package', component: CreateLearningPackageComponent},
    {path:'learning-facts/:packageId', component: LearningFactsPageComponent }
];

