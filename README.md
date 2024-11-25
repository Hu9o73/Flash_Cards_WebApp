# Flash_Cards_WebApp

Front/Back-end small project to discover web development. Made as part of the Node and React school course.

## How to make this work ?

- Copy the repository on your computer.

### Backend

- Make sure you have a working PostgreSQL database on your PC.
    - For more info, check : https://www.postgresql.org/
    - Create a user called `learningDbUser`, password `root`
    - With this user, create a database called `LearningFactDB`
    - If you change the db's name or the user's name/password, make sure to update dbConfig.ts
- Open up a Terminal (Windows Powershell)
- After navigating inside of the Backend file:
    - Type `npm install` to download all the dependecies.
    - Type `npm start` to start the server on port 3000.
- If successful, the terminal should output that the server is running on port 3000 and that the DB has been synchronized and seeded. 4 Learning Packages and 8 learning facts should be automatically seeded if everything is installed correctly.
- You can now access `localhost:3000/api-docs` to check the backend's api documentation.
- `localhost:3000/api/liveness` will return OK if the server is running.

### Frontend

- In another Terminal window, navigate to the Frontend File:
    - Type `npm install` to download all the dependencies.
    - Type `npm start`to start the app on port 4200
- If successful, you can access `localhost:4200` to use the app as a website.

## Previous repos where the project was stored (deprecated versions):

### Backend previous repo:
https://github.com/ESILV-4-A4-STD/devinci-web-expressjs-cdof4/tree/Bonnell

### Frontend previous repo:
https://github.com/ESILV-4-A4-STD/devinci-web-angularjs-cdof4/tree/Bonnell

## Features:
- Learning Packages Listing/Creation.
- Learning Facts Listing/Creation.
- Doesn't feature user management yet.

## Note:
All code featured in this repo, or in the linked repos in a branch called "Bonnell" or that I own, is mine.
App made to get hands-on experience with Angular, NodeJs, Postgres, HTML, Typescript, Bootstrap and so much more components of full-stack web dev !

