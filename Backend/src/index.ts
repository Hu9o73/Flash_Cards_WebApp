// General imports
import express, { Request, Response } from 'express';
import swaggerJsdoc from 'swagger-jsdoc';
import swaggerUi from 'swagger-ui-express';

// Database imports
import {syncDatabase} from './syncDatabase';
import { seedDatabase } from './fillDatabase'; 

// Routes imports
import packagesRoutes from './Routes/learningPackageRoutes';
import factsRoutes from './Routes/learningFactsRoutes';


// Create an instance of express
const app = express();

// Define a port
const PORT = process.env.PORT || 3000;


// Middleware to parse JSON bodies
app.use(express.json());


// SWAGGER

// Define Swagger options
const swaggerOptions: swaggerJsdoc.Options = {
  definition: {
    openapi: '3.0.0',  // OpenAPI version
    info: {
      title: 'Flash Cards Learning API',
      version: '1.0.0',
      description: 'API for managing Learning Packages and related data. By Hugo BONNELL.',
    },
  },
  // Specify where to find the API annotations
  apis: ['./src/apiAnnotations.ts'],
};

// Initialize swagger-jsdoc
const swaggerSpec = swaggerJsdoc(swaggerOptions);

// Serve Swagger UI on the `/api-docs` route
app.use('/api-docs', swaggerUi.serve, swaggerUi.setup(swaggerSpec));



// ROUTES

// Retrieve routes from other files
app.use(packagesRoutes);
app.use(factsRoutes);


// Defining basic routes for quick checks

// Define the /api/liveness route
app.get('/api/liveness', (req: Request, res: Response) => {
  res.status(200).send('OK');
});




// Server starting...

async function startServer() {
  try {
    // Synchronize the database
    await syncDatabase();
    
    // Start the server
    app.listen(PORT, () => {
      console.log(`Server is running on port ${PORT}`);

      // Seed the database after the server is up to use the existing POST requests
      seedDatabase();
    });
  } catch (error) {
    console.error('Error synchronizing or seeding the database:', error);
  }
}

// Start the server
startServer();