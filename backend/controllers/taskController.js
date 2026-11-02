
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
export const createTask = async (req, res) => {}

//a function that will update the task by id and return it to the client
export const updateTask = async (req, res) => {}

//a function that will delete the task by id and return it to the client 
export const deleteTask = async (req, res) => {}