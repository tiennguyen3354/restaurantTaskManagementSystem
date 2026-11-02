//this file will serve as the middle man that communicates with the database
//and will connects with the controller to send the data to the client.
import fs from 'node:fs/promises'; //this line imports the 'fs' module from Node.js,


const getTasks = async () => {
    try {
        const data = JSON.parse(await fs.readFile('./data/tasks.json', 'utf-8')); 
        console.log('user is accessing the tasks.json file');
        return data;
    } catch (error) {
        console.error('Error reading tasks.json:', error);
        throw error; // Rethrow the error to be handled by the caller
    }
};

const getTaskById = async (id) => {
    const data = JSON.parse(await fs.readFile('./data/tasks.json', 'utf-8'));
    console.log(`user is accessing the task with id ${id} from the tasks.json file`);
    const task = data.find(task => task.id === id);
    console.log(`task with id ${id} is : `, task);
    return task || null; // Return the found task or null if not found
} 

const createTask = async (task) => {}

const updateTask = async (id, updatedTask) => {}

const deleteTask = async (id) => {}

export default { getTasks, getTaskById, createTask, updateTask, deleteTask };