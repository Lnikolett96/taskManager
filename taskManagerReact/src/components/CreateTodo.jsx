import React, { useState } from "react";

function CreateTodo() {
    const [count, setCount] = useState(0)
    const [input, setInput] = useState("")
    const [tasks, setTasks] = useState(['Do Laundry', 'Make monthly plan', 'Make vision Board'])

    const handleChange = (event) => {
        setInput(event.target.value)
    }
  return (
    <React.Fragment>
      <h1>Tasks: {count}</h1>
      <input type="text" name="" id="" onChange={handleChange} />
      <button onClick={() => setCount(count + 1)}>Add Task</button>
      <h1>Input: {input}</h1>
      <ul>
        {tasks.map((task,index) => ( <li key={index}>{task}</li> ))}
      </ul>
    </React.Fragment>
  );
}

export default CreateTodo;
