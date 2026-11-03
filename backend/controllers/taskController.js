
import taskDb from '../model/taskDB.js'; //this line imports the 'getTasks' function from the 'taskDB.js' file, which is responsible for retrieving task data from the database (in this case, the 'tasks.json' file).

// this line reads the contents of the 'tasks.json' file synchronously and
// parses it as JSON. The 'utf-8' encoding is specified to ensure that the
// file is read as a string. The parsed data is then stored in 
// the 'data' variable, which can be used later in the application.

//this function will return all of the task to the client 
export const getTasks = async (req, res) => {
    const task = await taskDb.getTasks(); //this line calls the 'getTasks' function from the 'taskDB.js' file, which retrieves the task data from the database (in this case, the 'tasks.json' file). The 'await' keyword is used to wait for the asynchronous operation to complete before proceeding to the next line of code.

    if (task != null) {
        res.status(200).json(task);
    } else {
        res.status(404).json({ message: "Task not found" });
    }   

  // this line sends the 'data' variable as a JSON response to the client.
  // When a GET request is made to the endpoint associated with this controller,
  // the client will receive the contents of the 'tasks.json' file in JSON format.
}; 

//a function that will find the task by id and return it to the client
export const getTaskById = async (req, res) => {
    const {id} = req.params; //this line extracts the 'id' parameter from the request's URL parameters. The 'req.params' object contains key-value pairs of route parameters, and in this case, it retrieves the value of the 'id' parameter.
    const task = await taskDb.getTaskById(parseInt(id)); //this line calls the 'getTaskById' function from the 'taskDB.js' file, passing the parsed integer value of the 'id' parameter. The 'await' keyword is used to wait for the asynchronous operation to complete before proceeding to the next line of code.
    if (task != null) {
        res.status(200).json(task);
    } else {
        res.status(404).json({ message: "Task not found" });
    }
}

//a function that will create a new task and return it to the client
export const createTask = async (req, res) => {
    try {
        //step 1: get the new task data from the request 
        const {id,title, description, category, priority, status, assignedTo, dueDate}= req.body; //this line extracts the new task data from the request body. The 'req.body' object contains the data sent by the client in the request payload, which is expected to be in JSON format. This data will be used to create a new task in the database.
        //step 2: call your model to save the task

        if(isNaN(id) || !title || !description || !category || !priority || !status || !assignedTo || !dueDate) {
            return res.status(400).json({ message: "Missing required fields" });
        }else{ 
        const newTask = {id, title, description, category, priority, status, assignedTo, dueDate};
        const createdTask = await taskDb.createTask(newTask);
        //step 3: send the created task back to the client
        res.status(201).json(createdTask);
     }
    }
    catch (error) {
        console.error('Error creating task:', error);
        res.status(500).json({ message: "Internal server error" });
    }
}

//a function that will update the task by id and return it to the client
export const updateTask = async (req, res) => {
    const {id} = req.params; //this line extracts the 'id' parameter from the request's URL parameters. The 'req.params' object contains key-value pairs of route parameters, and in this case, it retrieves the value of the 'id' parameter.
    const {title, description, category, priority, status, assignedTo, dueDate} = req.body; //this line extracts the updated task data from the request body. The 'req.body' object contains the data sent by the client in the request payload, which is expected to be in JSON format. This data will be used to update the existing task in the database.
    const updatedTask = {title, description, category, priority, status, assignedTo, dueDate}; //this line creates a new object called 'updatedTask' that contains the updated task data extracted from the request body. This object will be passed to the model function to update the existing task in the database.
    const task = await taskDb.updateTask(parseInt(id), updatedTask); //this line calls the 'updateTask' function from the 'taskDB.js' file, passing the parsed integer value of the 'id' parameter and the 'updatedTask' object. The 'await' keyword is used to wait for the asynchronous operation to complete before proceeding to the next line of code.
    if (task != null) {
        res.status(200).json(task);
    } else {
        res.status(404).json({ message: "Task not found" });
    }
}

//a function that will delete the task by id and return it to the client 
export const deleteTask = async (req, res) => {
    const {id} = req.params; //this line extracts the 'id' parameter from the request's URL parameters. The 'req.params' object contains key-value pairs of route parameters, and in this case, it retrieves the value of the 'id' parameter.
    const deletedTask = await taskDb.deleteTask(parseInt(id)); //this line calls the 'deleteTask' function from the 'taskDB.js' file, passing the parsed integer value of the 'id' parameter. The 'await' keyword is used to wait for the asynchronous operation to complete before proceeding to the next line of code.
    if (deletedTask != null) {
        res.status(200).json(deletedTask);
    } else {
        res.status(404).json({ message: "Task not found" });
    }
}