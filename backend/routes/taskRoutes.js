import express from 'express';
import {getTasks, getTaskById, createTask,updateTask, deleteTask} from '../controllers/taskController.js';


//Create a new router instance that will handle the routing for task related endpoints
const taskRouter = express.Router(); 
taskRouter.get('/tasks', getTasks); // Define a GET route for the root path of the task router, which will invoke the getTasks controller function when accessed.
taskRouter.get('/tasks/:id', getTaskById); 
taskRouter.post('/tasks', createTask); // Define a POST route for the root path of the task router, which will invoke the createTask controller function when accessed.
taskRouter.put('/tasks/:id', updateTask); // Define a PUT route for the root path of the task router, which will invoke the updateTask controller function when accessed.
taskRouter.delete('/tasks/:id', deleteTask); // Define a DELETE route for the root path of the task router, which will invoke the deleteTask controller function when accessed. 
export {taskRouter}; // Export the taskRouter instance so that it can be used in other parts of the application, such as in the main server file (server.js) where it will be mounted to a specific path.

