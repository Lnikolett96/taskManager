import React from "react";
import "./Taskform.css";

const Taskform = () => {
  return (
    <header className="app_header">
      <form action="">
        <input
          type="text"
          className="task_input"
          placeholder="Enter Your Task"
          name=""
          id=""
        />
        <div className="task_form_bottom_line">
          <div>
            <button className="tag">Html</button>
            <button className="tag">Css</button>
            <button className="tag">Javascript</button>
            <button className="tag">React</button>
          </div>
          <div>
            <select className="task_status" name="" id="">
              <option value="todo">To do</option>
              <option value="doing">Doing</option>
              <option value="Done">Done</option>
            </select>

            <button className="task_submit" type="submit">
              Add Task
            </button>
          </div>
        </div>
      </form>
    </header>
  );
};

export default Taskform;
