import Task from "./Task"

//This does work but basically exporting twice, so using the bottom
// export const Tasks = ({tasks}) => {
//   return (
//     <div>
//         {tasks.map(
//             (task) => (<h3 key={task.id}> {task.text} </h3>)
//         )}
//     </div>
//   )
// }

const Tasks = ({tasks, onDelete, onToggle}) => {

  return (
    <div>
        {tasks.map(
            (task) => (<Task key={task.id} task={task} onDelete={onDelete} onToggle={onToggle}></Task>)
        )}
    </div>
  )
}

export default Tasks
