/**
 * @swagger
 * components: 
 *      schemas:
 *          Users: 
 *              type: object 
 *              require:
 *                  - name
 *                  - email
 *                  - password 
 *              properties:
 *                  name:
 *                      type: string
 *                      description: This is an input field for user's name.
 *                  email:
 *                      type: string
 *                      description: This is for email field which contains only unique values.
 *                  password:
 *                      type: string  
 *                      description: This is going to be convert in encryted form for security using bcrypt library.  
 *          Notes: 
 *              type: object 
 *              properties:
 *                  userId:
 *                      type: string
 *                      description: Unique identifier for the user who owns the note (references the User model).
 *                      example: "670d5fbef338cfede1352680"
 *                  noteTitle:
 *                      type: string
 *                      description: The title of the note.
 *                      example: "Shopping List"
 *                  noteDescription:
 *                      type: string
 *                      description: The description or content of the note.
 *                      example: "Buy milk, bread, and eggs."
 *                  isPinned:
 *                      type: boolean
 *                      description: Whether the note is pinned or not.
 *                      default: false
 *                  isRecycled:
 *                      type: boolean
 *                      description: Whether the note is moved to the recycle bin.
 *                      default: false
 *                  isArchive:
 *                      type: boolean
 *                      description: Whether the note is archived.
 *                      default: false
 *                  createdAt:
 *                      type: string
 *                      format: date-time
 *                      description: Timestamp when the note was created.
 *                  updatedAt:
 *                      type: string
 *                      format: date-time
 *                      description: Timestamp when the note was last updated. 
 *                  
 * tags: 
 *    - name: Users 
 *      description: This tag contains all apis related to CRUD operation for users...
 *    - name: Notes 
 *      description: This tag contains all apis related to CRUD operation for notes...
 * /api/v1/user/get:
 *   get:
 *     tags: [Users]
 *     summary: Retrieve a list of users...
 *     responses:
 *       200:
 *         description: List of all users.
 *         content:
 *           application/json:
 *             schema:  
 *               type: array
 *               items:
 *                 %ref: '#/components/schemas/Users' 
 * /api/v1/user/register:
 *   post:
 *     tags: [Users]
 *     summary: Retrieve a list of users...
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                  properties:
 *                      email:
 *                          type: string
 *                          description: The user's email address
 *                          example: "user@example.com"
 *                      password:
 *                          type: string 
 *                          description: The user's password
 *                          example: "password123"
 *                      name :
 *                          type: string 
 *                          description : user name
 *     responses:
 *       200:
 *         description: List of all users.
 *         content:
 *           application/json:
 *             schema:  
 *               type: array
 *               items:
 *                 %ref: '#/components/schemas/Users' 
 * 
 * /api/v1/user/login:
 *   post:
 *     tags: [Users]
 *     summary: Login api to check authenticate user...
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                  properties:
 *                      email:
 *                          type: string
 *                          description: The user's email address
 *                          example: "user@example.com"
 *                      password:
 *                          type: string 
 *                          description: The user's password
 *                          example: "password123"
 *     responses:
 *       200:
 *         description: Login Successful.
 *         content:
 *           application/json:
 *             schema:  
 *               type: array
 *               items:
 *                 type: object
 *
 * 
 * /api/v1/user/reset-password:
 *   put:
 *     tags: [Users]
 *     summary: Reset password api to change user password...
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                  properties:
 *                      email:
 *                          type: string
 *                          description: The user's email address
 *                          example: "user@example.com"
 *                      password:
 *                          type: string
 *                          description: The user's password
 *                          example: "password123"
 *                      newPassword:
 *                          type: string
 *                          description: The user's password
 *                          example: "password123"
 *                          
 *     responses:
 *       200:
 *         description: Password changed...
 *         content:
 *           application/json:
 *             schema:  
 *               type: array
 *               items:
 *                 type: object
 * 
 * 
 * /api/v1/user/delete-user:
 *   delete:
 *     tags: [Users]
 *     summary: Reset password api to change user password...
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                  properties:
 *                      email:
 *                          type: string
 *                          description: The user's email address
 *                          example: "user@example.com"
 *     responses:
 *       200:
 *         description: User deleted...
 *         content:
 *           application/json:
 *             schema:  
 *               type: array
 *               items:
 *                 type: object
 * 
 * /api/v1/note/get:
 *   get:
 *     tags: [Notes]
 *     summary: Retrieve a list of all notes...
 *     responses:
 *       200:
 *         description: List of all notes.
 *         content:
 *           application/json:
 *             schema:  
 *               type: array 
 *               items:
 *                 %ref: '#/components/schemas/Notes' 
 * 
 * /api/v1/note/create:
 *   post:
 *     tags: [Notes]
 *     summary: Reset password api to change user password...
 *     requestBody:
 *          required: true
 *          content:
 *              application/json:
 *                  schema:
 *                      type: object
 *                  properties:
 *                      userId:
 *                          type: string
 *                          description: Unique identifier for the user who owns the note (references the User model).
 *                          example: "670d5fbef338cfede1352680"
 *                      noteTitle:
 *                          type: string
 *                          description: The title of the note.
 *                          example: "Shopping List"
 *                      noteDescription:
 *                          type: string
 *                          description: The description or content of the note.
 *                          example: "Buy milk, bread, and eggs."
 *                      isPinned:
 *                          type: boolean
 *                          description: Whether the note is pinned or not.
 *                          default: false
 *                      isRecycled:
 *                          type: boolean
 *                          description: Whether the note is moved to the recycle bin.
 *                          default: false
 *                      isArchive:
 *                          type: boolean
 *                          description: Whether the note is archived.
 *                          default: false
 *                      createdAt:
 *                          type: string
 *                          format: date-time
 *                          description: Timestamp when the note was created.
 *                      updatedAt:
 *                          type: string
 *                          format: date-time
 *                          description: Timestamp when the note was last updated. 
                            
 *     responses:
 *       200:
 *         description: Login Successful.
 *         content:
 *           application/json:
 *             schema:  
 *               type: array
 *               items:
 *                 type: object
 * 
 */

