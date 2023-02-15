import './App.css';
import Header from "./components/Header"
import Tasks from './components/Tasks';
import { useState } from "react"

const App = () => {

  const [tasks, setTasks] = useState([    {
    "id": 1,
    "text": "Doctors Appointment",
    "day": "Feb 5th at 2:30pm",
    "reminder": true
  },
  {
    "id": 2,
    "text": "Meeting at School",
    "day": "Feb 6th at 1:30pm",
    "reminder": true
  },
  {
      "id": 3,
      "text": "Food Shopping",
      "day": "Feb 5th at 2:30pm",
      "reminder": false
  }
])

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
 
  return(
    <div className='container'>
      <Header ></Header>
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
