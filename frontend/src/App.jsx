import {useState , useEffect} from 'react';
import './App.css'

//   const taskArray = [
//   { id: 1, title: "Wash dishes", status: "Pending" },
//   { id: 2, title: "Clean tables", status: "Completed" },
//   { id: 3, title: "Restock napkins", status: "Pending" }
// ];

function Header() { 
  return ( 
    <header>
      <h1>Restaurant Task Manager</h1>
    </header> 
  );
}



function App() { 
  //useState hook to manage the state of tasks
  const [tasks, setTasks] = useState([]);
  const [taskID, setTaskID] = useState(""); 
  const [taskStatus, setTaskStatus] = useState(""); 
  const [taskName, setTaskName] = useState(""); 

  useEffect ( () => { 
    async function fetchTasks(){ 
      try { 
      const response = await fetch ('http://localhost:3000/api/tasks'); 
      const data = await response.json(); 
      setTasks(data); 
      } catch (error) { 
        console.log('something is wrong' , error );
      }

    }
  


    fetchTasks(); 
  

  }, []);

  function completeTask(id) { 
    setTasks((currentTasks) =>
   currentTasks.map((task) => {
    if (task.id === id) {
      return { ...task, status: "Completed" };
    }

    return task;
  })
); 
  }

  function TaskCard(props) {
  
        return (
          <div> 
            <h3>{props.title}</h3>
            <p>Status: {props.status}</p>
            <button onClick={() => completeTask(props.id)}>Complete {props.title} </button>
          </div>

        );
  }

  function handleSubmit(event) { 
    event.preventDefault() ; 
    console.log(`Task name:  ${taskName}  , Task ID: ${taskID}, Task Status: ${taskStatus}`); 
  }

  function addTask( event ) { 
    event.preventDefault(); 
    const newTask = { 
      id: taskID, 
      title: taskName, 
      status: taskStatus
    }
    setTasks ( (currentTasks) => [ ...currentTasks, newTask])

  }


    return (
        <div>
            <Header />
            <h2> Today's tasks</h2>
            <div> 
              {tasks.map((task) => {
                return (
                  
                    <TaskCard  
                      key={task.id}
                      title={task.title} 
                      status={task.status} 
                      id={task.id}
                    />
                   
                );
              })}
              <form onSubmit={addTask}>
                <input 
                  value={taskName} 
                  onChange={(event)=> setTaskName(event.target.value)}
                  placeholder='Enter a task name'
                />
                 <input 
                  value={taskID} 
                  onChange={(event)=> setTaskID(event.target.value)}
                  placeholder='Enter a task ID'
                />
                 <input 
                  value={taskStatus} 
                  onChange={(event)=> setTaskStatus(event.target.value)}
                  placeholder='Enter a task status'
                />
                <button type='submit'> submit </button>
              </form>
            
            </div>
            
        </div>
    );
}



export default App
