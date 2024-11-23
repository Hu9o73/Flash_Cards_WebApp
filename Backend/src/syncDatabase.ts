import sequelize from './dbConfig';
import { LearningPackage } from './models/LearningPackage';
import { LearningFact } from './models/LearningFact';

export async function syncDatabase() {
  try {
    // Synchronize the database (creates the table if it doesn't exist)
    await sequelize.authenticate();
    console.log('Database connection via Sequelize has been established successfully.');

    await LearningPackage.sync({ force: true }); // Use `force: true` to drop and recreate the table (false otherwise)
    console.log('LearningPackage table has been synchronized.');

    await LearningFact.sync({ force: true });
    console.log('LearningFacts table have been synchronized.')
  } catch (error) {
    console.error('Unable to connect to the database or sync table:', error);
  }
}
