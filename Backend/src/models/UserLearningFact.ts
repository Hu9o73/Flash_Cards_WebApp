export interface UserLearningFact {
    id: number; // Primary Key
    userId: number; // Foreign Key referencing User
    learningFactId: number; // Foreign Key referencing LearningFact
    reviewCount: number; // Number of times the fact has been reviewed
    confidenceLevel: number; // Confidence level (e.g., 0-1 scale or percentage)
    lastReviewedDate: Date;
  }
  