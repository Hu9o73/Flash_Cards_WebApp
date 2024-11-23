import express, { Router, Request, Response } from 'express';
import { LearningFact } from '../models/LearningFact';


const router = Router();
router.use(express.json());


// GET facts of a package by its id
router.get('/api/package/:id/fact', async (req: Request, res: Response) => {
    const packageId = req.params.id;
  
    try {
      const facts = await LearningFact.findAll({ where: { packageId, disabled: false } });
      res.status(200).json(facts);
    } catch (err) {
      console.error('Error fetching facts:', err);
      res.status(500).json({ message: 'Failed to fetch facts', error: err });
    }
});


// GET fact by packageId and factId
router.get('/api/package/:packageId/fact/:factId', async (req: Request, res: Response) => {
    const packageId = req.params.packageId;
    const factId = req.params.factId;

    try {
        const fact = await LearningFact.findOne({ where: { packageId, id: factId, disabled: false } });

        if (!fact) {
            res.status(404).json({ message: 'Fact not found' });
        }else{
            res.status(200).json(fact);
        }        
    } catch (err) {
        console.error('Error fetching fact:', err);
        res.status(500).json({ message: 'Failed to fetch fact', error: err });
    }
});


// POST fact to package with id
router.post('/api/package/:id/fact', async (req: Request, res: Response) => {
    const packageId = req.params.id;
    const { content } = req.body;
  
    try {
      const newFact = await LearningFact.create({ content, packageId });
      res.status(201).json(newFact);
    } catch (err) {
      console.error('Error creating fact:', err);
      res.status(500).json({ message: 'Failed to create fact', error: err });
    }
});


// UPDATE fact with id in package with id
router.put('/api/package/:id/fact', async (req: Request, res: Response) => {
    const packageId = req.params.id;
    const { id, content } = req.body; // Fact ID and updated content from the body
  
    try {
      // Find the fact within the package
      const fact = await LearningFact.findOne({ where: { id, packageId } });
  
      if (!fact) {
        res.status(404).json({ message: 'Fact not found' });
      }else{
        // Update the content of the fact
        fact.content = content;
        await fact.save();
        res.status(200).json(fact);
      }
    } catch (error) {
      console.error('Error updating fact:', error);
      res.status(500).json({ message: 'Failed to update fact', error });
    }
});


// DELETE fact by id in package with id
router.delete('/api/package/:id/fact', async (req: Request, res: Response) => {
    const packageId = req.params.id;
    const { id } = req.body; // Include the fact ID in the request
  
    try {
      const fact = await LearningFact.findOne({ where: { id, packageId } });
  
      if (!fact) {
        res.status(404).json({ message: 'Fact not found' });
      }else{
        fact.disabled = true;
        await fact.save();
    
        res.status(200).json({ message: 'Fact marked as disabled', fact }); 
      } 
    } catch (err) {
      console.error('Error deleting fact:', err);
      res.status(500).json({ message: 'Failed to delete fact', error: err });
    }
});
  


  
  

  




export default router;