/* eslint-disable no-unused-vars */
/* eslint-disable react/jsx-key */
import { useState } from "react"

const Home = () => {
  const [tasks, setTasks] = useState([])

  const [newTask, setNewTask] = useState({
    title: "",
    description: "",
    time: ""
  })

  const handleChange = (event) => {
    const { name, value } = event.target;
    setNewTask((task) => ({
      ...task,
      [name]: value
    }));
    
  }

  const handleSubmit = (event) =>  {
    event.preventDefault();
    setTasks([...tasks, newTask])
    setNewTask({
      title: "",
      description: "",
      time: ""
    })
  }


  return (
    <div>
      <div className="heading">
        <h1>Tasks</h1>
      </div>

      <div>
        <form onSubmit={handleSubmit}>
          <input type="text" placeholder="title" name="title" onChange={handleChange} value={newTask.title}/>
          <input type="time" placeholder="time" name="time" onChange={handleChange} value={newTask.time}/>
          <textarea type="text" placeholder="description" name="description" onChange={handleChange} value={newTask.description}/>
          <button type="submit">Add Task</button>
        </form>
      </div>

      <div className="tasks">
        <ul>
          {tasks.map(task => (
            <li>
              <h1>{task.title} - {task.time}</h1>
              <div>{task.description}</div>
            </li>
          ))}
        </ul>
      </div>
    </div>
  )
}

export default Home
