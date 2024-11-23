import { LearningFact } from './models/LearningFact';
import { LearningPackage } from './models/LearningPackage';

export let learningPackages: LearningPackage[] = [
  new LearningPackage({id:1, title:'Learn TypeScript', description:'A complete guide to mastering TypeScript.', category:'Programming', targetAudience:'Developers, Students', difficultyLevel:10}),
  new LearningPackage({id:2, title:'Learn NodeJs', description:'Learn how to build scalable backend applications using Node.js.', category:'Backend Development', targetAudience:'Developers, Backend Engineers', difficultyLevel:12}),
  new LearningPackage({id:3, title:'Learn Html', description:'Understand the basics of web development with HTML.', category:'Web Development', targetAudience:'Beginners, Students', difficultyLevel:5}),
  new LearningPackage({id:4, title:'Learn Angular', description:'Develop dynamic web applications using Angular framework.', category:'Frontend Development', targetAudience:'Frontend Developers, Students', difficultyLevel:15}),
];


export let learningFacts: LearningFact[] = [
  // Facts for package 1
  new LearningFact({ content: 'TypeScript is a superset of JavaScript.', packageId: 1 }),
  new LearningFact({ content: 'TypeScript introduces static typing.', packageId: 1 }),

  // Facts for package 2
  new LearningFact({ content: 'Node.js uses an event-driven architecture.', packageId: 2 }),
  new LearningFact({ content: 'Node.js is built on the V8 JavaScript engine.', packageId: 2 }),

  // Facts for package 3
  new LearningFact({ content: 'HTML stands for HyperText Markup Language.', packageId: 3 }),
  new LearningFact({ content: 'HTML forms the skeleton of web pages.', packageId: 3 }),

  // Facts for package 4
  new LearningFact({ content: 'Angular is a TypeScript-based framework.', packageId: 4 }),
  new LearningFact({ content: 'Angular uses a component-based architecture.', packageId: 4 }),
];