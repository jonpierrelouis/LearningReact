import './App.css';
import Header from "./components/Header"
import Tasks from './components/Tasks';
import { useState, useEffect } from "react"
import AddTask from './components/AddTask';

const App = () => {

  const [showAddTask, setShowAddTask] = useState(false)
  const [tasks, setTasks] = useState([])
  
  //get data from backend
  useEffect(() => {
    const fetchTasks = async () => {
      const resp = await fetch('http://localhost:5000/tasks')
      const data = await resp.json()
  
      setTasks(data)
    }
    fetchTasks()
  }, [])

  //delete task functionality
  const deleteTask = (id) => {
    setTasks(tasks.filter( (task) => task.id !== id ))
  }

  const toggleReminder = (id) => {
    setTasks(tasks.map(
      (task) => task.id === id ? 
      {...task, reminder: !task.reminder}
      : task
    ))
  }
 
  const addTask = (task) => {
    const id = Math.floor(Math.random() * 10000) + 1
    
    const newTask = {id, ...task}

    setTasks(tasks.concat(newTask))
    /**
     * Could also do:
     * setTasks([...tasks, newTask])
     */
  }

  return(
    <div className='container'>
      {
        showAddTask ?
        <Header onAdd={() => setShowAddTask(!showAddTask)} shownColor='red' shownText='Close'></Header>
        : <Header onAdd={() => setShowAddTask(!showAddTask)} shownColor='green' shownText='Open'></Header>
      }

      {
        showAddTask &&
        <AddTask onAdd={addTask}></AddTask>
      }

      {
        tasks.length > 0 ?
        <Tasks tasks ={tasks} onDelete={deleteTask} onToggle={toggleReminder}></Tasks>
        : "No tasks to show"
      }
    </div>
  )
}

//A slightly different way to run the same code, 
//it can also be done using a class and importing react from react
// function App() {
//   const name = "Jon"
//   const x = true

//   return (
//     <div className="container">
//       <Header/>
//     </div>
//   );
// }

export default App;
