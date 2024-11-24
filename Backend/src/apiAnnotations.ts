// GENERAL

// Liveness
/**
 * @openapi
 * /api/liveness:
 *   get:
 *     tags:
 *      - General
 *     description: Check the server liveness.
 *     responses:
 *       200:
 *         description: Server is alive
 */



// LEARNING PACKAGES

// GET for "/api/package"
/**
 * @openapi
 * /api/package:
 *   get:
 *     tags: 
 *        - Learning Packages
 *     summary: Retrieve all Learning Packages.
 *     responses:
 *       200:
 *         description: List of Learning Packages
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   title:
 *                     type: string
 *                     example: "Learn TypeScript"
 */
//

// GET for "/api/package-summaries"
/**
 * @openapi
 * /api/package-summaries:
 *   get:
 *     tags: 
 *        - Learning Packages
 *     summary: Retrieve only the summaries (id and title) of all Learning Packages.
 *     responses:
 *       200:
 *         description: List of Learning Package Summaries
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 type: object
 *                 properties:
 *                   id:
 *                     type: integer
 *                     example: 1
 *                   title:
 *                     type: string
 *                     example: "Learn TypeScript"
 */
//

// GET package by id
/**
 * @openapi
 * /api/package/{id}:
 *   get:
 *     tags: 
 *        - Learning Packages
 *     summary: Retrieve a Learning Package by its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the Learning Package
 *         required: true
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Learning Package found
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LearningPackage'
 *       404:
 *         description: Learning Package not found
 */
//

// POST new learning package
/**
 * @openapi
 * /api/package:
 *   post:
 *     tags: 
 *        - Learning Packages
 *     summary: Create a new Learning Package.
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               title:
 *                 type: string
 *                 example: "Learn TypeScript"
 *               description:
 *                 type: string
 *                 example: "A complete guide to mastering TypeScript."
 *               category:
 *                 type: string
 *                 example: "Programming"
 *               targetAudience:
 *                 type: string
 *                 example: "Developers, Students"
 *               difficultyLevel:
 *                 type: integer
 *                 example: 10
 *     responses:
 *       201:
 *         description: Learning Package created successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LearningPackage'
 */
//

// PUT update learning package by id
/**
 * @openapi
 * /api/package/{id}:
 *   put:
 *     tags: 
 *        - Learning Packages
 *     summary: Update an existing Learning Package by its ID.
 *     parameters:
 *       - name: id
 *         in: path
 *         description: ID of the Learning Package to update
 *         required: true
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/LearningPackage'
 *     responses:
 *       200:
 *         description: Learning Package updated successfully
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LearningPackage'
 *       404:
 *         description: Learning Package not found
 */
//

// DELETE a learning package by id
/**
 * @swagger
 * /api/package/{id}:
 *   delete:
 *     summary: Remove a learning package and its associated facts
 *     description: Deletes a learning package by its ID and also removes all learning facts associated with it.
 *     tags:
 *       - Learning Packages
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         description: The ID of the learning package to be deleted.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Learning package and associated facts deleted successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Learning package and associated facts deleted successfully.
 *       404:
 *         description: Learning package not found.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Learning package not found.
 *       500:
 *         description: Internal server error.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Internal server error.
 */
//


// LEARNING FACTS

// GET facts of a package by its id
/**
 * @openapi
 * /api/package/{id}/fact:
 *   get:
 *     tags:
 *      - LearningFacts
 *     summary: Get all facts for a specific learning package.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the learning package.
 *         schema:
 *           type: integer
 *     responses:
 *       200:
 *         description: Successfully retrieved all facts for the learning package.
 *         content:
 *           application/json:
 *             schema:
 *               type: array
 *               items:
 *                 $ref: '#/components/schemas/LearningFact'
 *       404:
 *         description: Package not found.
 *       500:
 *         description: Server error.
 */
//

// GET fact by packageId and factId
/**
 * @openapi
 *   /api/package/{packageId}/fact/{factId}:
 *     get:
 *       tags:
 *        - LearningFacts
 *       summary: Retrieve a learning fact by its package and fact IDs.
 *       parameters:
 *         - in: path
 *           name: packageId
 *           required: true
 *           description: The ID of the learning package
 *           schema:
 *             type: integer
 *         - in: path
 *           name: factId
 *           required: true
 *           description: The ID of the learning fact within the package
 *           schema:
 *             type: integer
 *       responses:
 *         200:
 *           description: Successfully retrieved the learning fact
 *           content:
 *             application/json:
 *               schema:
 *                 $ref: '#/components/schemas/LearningFact'
 *         404:
 *           description: Fact not found for the given package ID and fact ID
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Fact not found"
 *         500:
 *           description: Server error
 *           content:
 *             application/json:
 *               schema:
 *                 type: object
 *                 properties:
 *                   message:
 *                     type: string
 *                     example: "Failed to fetch fact"
 */
//


// POST fact to package with id
/**
 * @openapi
 * /api/package/{id}/fact:
 *   post:
 *     tags:
 *      - LearningFacts
 *     summary: Add a new fact to a specific learning package.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the learning package.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               content:
 *                 type: string
 *                 example: "This is a new fact."
 *     responses:
 *       201:
 *         description: Fact created successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LearningFact'
 *       404:
 *         description: Package not found.
 *       500:
 *         description: Server error.
 */
//


// UPDATE fact with id in package with id
/**
 * @openapi
 * /api/package/{id}/fact:
 *   put:
 *     tags:
 *      - LearningFacts
 *     summary: Update an existing fact in a learning package.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the learning package.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *               content:
 *                 type: string
 *                 example: "Updated fact content."
 *     responses:
 *       200:
 *         description: Fact updated successfully.
 *         content:
 *           application/json:
 *             schema:
 *               $ref: '#/components/schemas/LearningFact'
 *       404:
 *         description: Fact not found.
 *       500:
 *         description: Server error.
 */
//



// DELETE fact by id in package with id
/**
 * @openapi
 * /api/package/{id}/fact:
 *   delete:
 *     tags:
 *      - LearningFacts
 *     summary: Mark a fact as disabled in a learning package.
 *     parameters:
 *       - name: id
 *         in: path
 *         required: true
 *         description: ID of the learning package.
 *         schema:
 *           type: integer
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               id:
 *                 type: integer
 *                 example: 1
 *     responses:
 *       200:
 *         description: Fact marked as disabled successfully.
 *         content:
 *           application/json:
 *             schema:
 *               type: object
 *               properties:
 *                 message:
 *                   type: string
 *                   example: Fact marked as disabled.
 *                 fact:
 *                   $ref: '#/components/schemas/LearningFact'
 *       404:
 *         description: Fact not found.
 *       500:
 *         description: Server error.
 */
//






// SCHEMAS

// Learning packages
/**
 * @openapi
 * components:
 *   schemas:
 *     LearningPackage:
 *       type: object
 *       required:
 *         - id
 *         - title
 *         - description
 *         - category
 *         - targetAudience
 *         - difficultyLevel
 *       properties:
 *         id:
 *           type: integer
 *         title:
 *           type: string
 *         description:
 *           type: string
 *         category:
 *           type: string
 *         targetAudience:
 *           type: string
 *         difficultyLevel:
 *           type: integer
 */
//

// Learning facts
/**
 * @openapi
 * components:
 *   schemas:
 *     LearningFact:
 *       type: object
 *       properties:
 *         id:
 *           type: integer
 *           description: Unique identifier for the learning fact.
 *           example: 1
 *         content:
 *           type: string
 *           description: The content or description of the learning fact.
 *           example: "This is a fact about the learning package."
 *         packageId:
 *           type: integer
 *           description: ID of the learning package to which this fact belongs.
 *           example: 2
 *         disabled:
 *           type: boolean
 *           description: Indicates whether the fact is disabled (soft-deleted).
 *           example: false
 */
//



// By Hugo BONNELL