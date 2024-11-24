import { Routes, RouterModule } from '@angular/router';
import { NgModule } from '@angular/core';
import { LearningPackagesListPageComponent } from './Components/learning-packages-list-page/learning-packages-list-page.component';

export const routes: Routes = [
    {path:'packages-list', component: LearningPackagesListPageComponent}
];

