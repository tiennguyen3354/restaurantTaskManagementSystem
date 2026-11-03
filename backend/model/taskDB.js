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

const createTask = async (task) => {
    const data = JSON.parse(await fs.readFile('./data/tasks.json', 'utf-8'));
    data.push(task);
    await fs.writeFile('./data/tasks.json', JSON.stringify(data));
    return task;
}

const updateTask = async (id, updatedTask) => {
    const data = JSON.parse(await fs.readFile('./data/tasks.json', 'utf-8'));
    const taskIndex = data.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        data[taskIndex] = { ...data[taskIndex], ...updatedTask };
        await fs.writeFile('./data/tasks.json', JSON.stringify(data));
        return data[taskIndex];
    }
    return null;
}

const deleteTask = async (id) => {
    const data = JSON.parse(await fs.readFile('./data/tasks.json', 'utf-8'));
    const taskIndex = data.findIndex(task => task.id === id);
    if (taskIndex !== -1) {
        const deletedTask = data.splice(taskIndex, 1)[0];
        await fs.writeFile('./data/tasks.json', JSON.stringify(data));
        return deletedTask;
    }
    return null;
}

export default { getTasks, getTaskById, createTask, updateTask, deleteTask };