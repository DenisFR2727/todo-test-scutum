import { useState } from "react";
import { useDispatch } from "react-redux";
import { addTask,activeCheck,completedCheck,deleteAllTasks } from "../action/action";
import { v4 as uuidv4 } from 'uuid';

import "./todoform.css";

const TodoForm = () => {
      const [taskName, setTaskName] = useState('');
      const dispatch = useDispatch();

const hadlerSubmit = (e) => {
      e.preventDefault()
      const newTask = {
        id: uuidv4(),
        name: taskName,
        currentDate: new Date().toLocaleString()
      }
      setTaskName('')
      dispatch(addTask(newTask));
}
const handleInputChange = (e) => {
      let value = e.target.value;
          if(value.length <= 100){
                setTaskName(value)   
          }
}

    return (<div className="form_active_completed">
                <form onSubmit={hadlerSubmit}>
                    <div className="add_task">
                        <input className="task_value" 
                            type="text" 
                            name="taskName"
                            onChange={handleInputChange}
                            value={taskName}  />
                        <button className="add_task_btn">+ Add Task</button>
                    </div>
            </form>
            <div className="buttons_task">
               <button className="completed_btn"
                       onClick={() => dispatch(completedCheck())}
               >Completed
               </button>
               <button className="active_btn"
                       onClick={() => dispatch(activeCheck())}>Active</button>
               <button className="clear_tasks"
                       onClick={() => dispatch(deleteAllTasks())}>ClearTasks</button>
            </div>
        </div>)
}
export default TodoForm;
