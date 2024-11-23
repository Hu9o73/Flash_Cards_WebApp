import { learningPackages } from './modelsInstantiations';
import { learningFacts } from './modelsInstantiations';
// Used to make HTTP requests
import axios from 'axios';

let API_URL = 'http://localhost:3000';

export async function seedDatabase() {
    console.log("---------------------------------");
    console.log("Starting to fill the database ...");
    try {
      
      // Learning packages

      API_URL = 'http://localhost:3000/api/package';      
      
      // Loop through each learning package and make an API call to create it
      for (const pkg of learningPackages) {
        const packageDataA = {
          title: pkg.title,
          description: pkg.description,
          category: pkg.category,
          targetAudience: pkg.targetAudience,
          difficultyLevel: pkg.difficultyLevel,
        };
  
        // Call the API to create the learning package
        await axios.post(API_URL, packageDataA);
  
        // Log the response from the API (you can adjust this as needed)
        console.log(`Learning package '${pkg.title}' created successfully: !`);
      }

      // Learning Facts
      
      let learningFactsImplemented = 0; 
      for (const pkg of learningFacts){
        
        const packageDataB = {
          content: pkg.content,
          packageId: pkg.packageId,
        };

        API_URL = 'http://localhost:3000/api/package/' + packageDataB.packageId + '/fact';
        try{
          const response = await axios.post(API_URL, packageDataB);

          if (response.status == 201){
            learningFactsImplemented = learningFactsImplemented + 1;
          }
        } catch(error) {
          console.error('Error inserting fact sfor packageId:', packageDataB.packageId);
        }
      }
      console.log('Inserted', learningFactsImplemented, 'learning facts successfully.');
  
      console.log('Seeding complete.');
    } catch (error) {
      console.error('Error seeding the database via API:', error);
    }
}

