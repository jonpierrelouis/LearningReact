import "../App.css"
import { useState, useEffect } from "react"
import Header from "./Header"
import Tasks from "./Tasks"
import AddTask from "./AddTask"

const Home = () => {

    const [showAddTask, setShowAddTask] = useState(false)
    const [tasks, setTasks] = useState([])
    
    //get data from backend on initial load
    useEffect(() => {
      const fetchTasks = async () => {
        const resp = await fetch('http://localhost:5000/tasks')
        const data = await resp.json()
    
        setTasks(data)
      }
      fetchTasks()
    }, [])
  
    //get a single task
    const fetchTask = async (id) => {
      const resp = await fetch(`http://localhost:5000/tasks/${id}`)
      const data = await resp.json()
  
      return data
    }
  
    //delete task functionality
    const deleteTask = async (id) => {
      await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'DELETE'
      })
  
      setTasks(tasks.filter( (task) => task.id !== id ))
    }
  
    //toggle reminder
    const toggleReminder = async (id) => {
  
      const taskToToggle = await fetchTask(id)
      const updatedTask = {...taskToToggle, reminder: !taskToToggle.reminder}
  
      const resp =await fetch(`http://localhost:5000/tasks/${id}`, {
        method: 'PUT',
        headers: {
          'Content-type': 'application/json'
        },
        body: JSON.stringify(updatedTask)
      })
  
      const data = await resp.json()
      
      setTasks(tasks.map(
        (task) => task.id === id ? 
        {...task, reminder: data.reminder /*!task.reminder*/}
        : task
      ))
    }
   
    //add tasks
    const addTask = async (task) => {
  
      const resp = await fetch(`http://localhost:5000/tasks/`, {
        method: 'POST',
        headers: {
          'Content-type': "application/json"
        },
        body: JSON.stringify(task)
      })
  
      const data = await resp.json()
      setTasks([...tasks, data])
  
      //needed previously for hardcoded tasks (no backend), needed an id for keys
      // const id = Math.floor(Math.random() * 10000) + 1
      // const newTask = {id, ...task}
      //setTasks(tasks.concat(newTask))  
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

export default Home