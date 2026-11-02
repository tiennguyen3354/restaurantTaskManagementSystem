import express from 'express';
import {getTasks, getTaskById} from '../controllers/taskController.js';


//Create a new router instance that will handle the routing for task related endpoints
const taskRouter = express.Router(); 
taskRouter.get('/tasks', getTasks); // Define a GET route for the root path of the task router, which will invoke the getTasks controller function when accessed.
taskRouter.get('/tasks/:id', getTaskById); 
export {taskRouter}; // Export the taskRouter instance so that it can be used in other parts of the application, such as in the main server file (server.js) where it will be mounted to a specific path.

