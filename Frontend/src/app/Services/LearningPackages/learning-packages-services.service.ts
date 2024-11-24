import { Component, Injectable } from '@angular/core';
import { HttpClient } from '@angular/common/http';
import { Observable } from 'rxjs';
import { LearningPackage } from '../../models/learning-package.model';


@Injectable({
  providedIn: 'root'
})
export class LearningPackagesService {

  private readonly API_URL = 'http://localhost:3000/api/package';

  constructor(private http: HttpClient) { }

  // Fetch all learning packages
  getAllPackages(): Observable<any[]> {
    return this.http.get<any[]>(this.API_URL);
  }

  // Fetch a specific learning package by ID
  getPackageById(id: number): Observable<any> {
    return this.http.get<LearningPackage>(`${this.API_URL}/${id}`);
  }
  // Method to create a new learning package
  createLearningPackage(learningPackage: LearningPackage): Observable<any> {
    return this.http.post(this.API_URL, learningPackage);
  }

  // New method to get learning facts for a specific package
  getLearningFacts(packageId: number): Observable<any[]> {
    return this.http.get<any[]>(`${this.API_URL}/${packageId}/fact`);
  }

  // New method to add a fact
  addLearningFact(packageId: number, content: string): Observable<any> {
    const factData = { content }; // Create the fact object to send in the body
    return this.http.post<any>(`${this.API_URL}/${packageId}/fact`, factData);
  }

  deletePackage(packageId: number): Observable<void> {
    return this.http.delete<void>(`${this.API_URL}/${packageId}`); // Assumes your backend is set up to handle DELETE requests
  }
}
