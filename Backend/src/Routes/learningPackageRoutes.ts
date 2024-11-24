import express, { Router, Request, Response } from 'express';
import { LearningPackage } from '../models/LearningPackage';
import { LearningFact } from '../models/LearningFact';

const router = Router();
router.use(express.json());


// Declare the GET route for "/api/package"
router.get('/api/package', async (req: Request, res: Response) => {
    try {
      const learningPackages = await LearningPackage.findAll();  // Get all records
      res.status(200).json(learningPackages);
    } catch (err) {
      console.error('Error fetching learning packages:', err);
      res.status(500).json({ message: 'Database query failed', error: err });
    }
});



// Declare the GET route for "/api/package-summaries"
router.get('/api/package-summaries', async (req: Request, res: Response) => {
    try {
      const packageSummaries = await LearningPackage.findAll({
        attributes: ['id', 'title'],  // Only select the 'id' and 'title' columns
      });
      res.status(200).json(packageSummaries);
    } catch (err) {
      console.error('Error fetching package summaries:', err);
      res.status(500).json({ message: 'Database query failed', error: err });
    }
});



// Route to get a LearningPackage by ID
router.get('/api/package/:id', async (req: Request, res: Response) => {
    const packageId = parseInt(req.params.id);
  
    try {
      const learningPackage = await LearningPackage.findByPk(packageId);  // Find by primary key
      if (learningPackage) {
        res.status(200).json(learningPackage);
      } else {
        res.status(404).json({ message: `Learning Package with ID ${packageId} not found.` });
      }
    } catch (err) {
      console.error('Error fetching learning package:', err);
      res.status(500).json({ message: 'Database query failed', error: err });
    }
});



// POST route to create a new learning package
router.post('/api/package', async (req: Request, res: Response) => {
    const { title, description, category, targetAudience, difficultyLevel } = req.body;
  
    try {
      const newLearningPackage = await LearningPackage.create({
        title,
        description,
        category,
        targetAudience,
        difficultyLevel,
      });
      res.status(201).json(newLearningPackage);  // Return the newly created object
    } catch (err) {
      console.error('Error creating learning package:', err);
      res.status(500).json({ message: 'Failed to create Learning Package', error: err });
    }
});



// PUT route to update an existing learning package by ID
router.put('/api/package/:id', async (req: Request, res: Response) => {
    const packageId = parseInt(req.params.id);
    const { title, description, category, targetAudience, difficultyLevel } = req.body;
  
    try {
      const learningPackage = await LearningPackage.findByPk(packageId);
  
      if (learningPackage) {
        // Update the record with new data
        learningPackage.title = title;
        learningPackage.description = description;
        learningPackage.category = category;
        learningPackage.targetAudience = targetAudience;
        learningPackage.difficultyLevel = difficultyLevel;
  
        await learningPackage.save();  // Save the updated record to the database
        res.status(200).json(learningPackage);
      } else {
        res.status(404).json({ message: `Learning Package with ID ${packageId} not found.` });
      }
    } catch (err) {
      console.error('Error updating learning package:', err);
      res.status(500).json({ message: 'Failed to update Learning Package', error: err });
    }
});


// DELETE Route to remove a learning Package
router.delete('/api/package/:id', async (req, res) => {
  const packageId = parseInt(req.params.id);

  try {
    // Validate if the package exists
    const learningPackage = await LearningPackage.findByPk(packageId);
    if (learningPackage) {
      // Remove all associated facts (if stored in a separate table/collection)
      await LearningFact.destroy({ where: { packageId: packageId } });

      // Remove the learning package
      await LearningPackage.destroy({ where: { id: packageId } });

      res.status(200).json({ message: 'Learning package and associated facts deleted successfully' });
    }else{
      res.status(404).json({ message: 'Learning package not found' });
    }

    
  } catch (error) {
    console.error('Error deleting learning package:', error);
    res.status(500).json({ message: 'Internal server error' });
  }
});

export default router;