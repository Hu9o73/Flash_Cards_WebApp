import { Sequelize } from 'sequelize';

// Database connection details
const sequelize = new Sequelize({
  host: 'localhost',             // Server (PostgreSQL is running on localhost)
  dialect: 'postgres',           // Database dialect (PostgreSQL)
  database: 'LearningFactDB',    // Database name
  username: 'learningDbUser',    // Database username
  password: 'root',              // Database password
  logging: false,                // Disable logging SQL queries to console (optional)
});

export default sequelize;
