export interface UserPackageLearning {
    id: number; // Primary Key
    userId: number; // Foreign Key referencing User 
    learningPackageId: number; // Foreign Key referencing LearningPackage
    startDate: Date;
    expectedEndDate: Date;
    minutesPerDayObjective: number;
  }
  