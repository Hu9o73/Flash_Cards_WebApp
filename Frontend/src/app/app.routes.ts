import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LearningPackagesListPageComponent } from './Components/learning-packages-list-page/learning-packages-list-page.component';
import { CreateLearningPackageComponent } from './Components/learning-package-create/learning-package-create.component';

export const routes: Routes = [
    {path:'packages-list', component: LearningPackagesListPageComponent},
    {path:'create-package', component: CreateLearningPackageComponent}
];

