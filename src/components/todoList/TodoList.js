import { useContext } from "react";
import { useDispatch,useSelector} from "react-redux";
import { addTaskCompleted, deleteTask } from "../action/action";

import ThemeContext from "../theme/ThemeContext";
import ThemeProvider from "../theme/ThemeProvider";
import "./todolist.css"

const TodoList = () => {
      const {tasks, 
             completed, 
             activeCheck, 
             completedCheck,
            } = useSelector(state => state);
            
      const dispatch = useDispatch();
      const {theme, toggleTheme, themeColor } = useContext(ThemeContext);
     
// list tasks
const renderTasksActive = (arr) => {
      return arr.map(({id,...task}) => {
            return <ul key={id} >
                  <li className="content_task_with_btn" style={themeColor} >
                    {task.name === "" ? <p>Нет задач</p> : <p>{task.name}</p>}
                    <span 
                      className="material-symbols-outlined check_circle"
                      onClick={() => dispatch(addTaskCompleted({id,...task}))}>
                        check_circle
                    </span>
                    <div className="current_date">
                        {task.currentDate} 
                    </div>
                    <button 
                      className="del_task_btn"
                      onClick={() => dispatch(deleteTask(id))}>X</button></li>
            </ul> 
      })
}
const renderCompletedTasks = (arr) => {
        return arr.map(({id,...task}) => {
            return <ul key={id}>
                <li className="content_task_with_btn"
                    style={themeColor}>
                    {task.name === "" ? <p>Нет задач</p> : <p>{task.name}</p>}
                    <span 
                    className="material-symbols-outlined check_circle">
                        check_circle
                    </span>
                    <div className="current_date">
                        {task.currentDate} 
                    </div>
                    <button className="del_task_btn"
                            onClick={() => dispatch(deleteTask(id))}>X</button></li>
            </ul> 
    })
}

const tasksElement = renderTasksActive(tasks);
const completedTasks = renderCompletedTasks(completed);

    return(<div className="container">
             {activeCheck && <div className="active_task"
                                  style={theme}>
             <p className="container_active"
                >Active</p>
             <button className="theme_active"
                     style={theme}
                     onClick={toggleTheme}
                      >Theme Active
             </button>
                {tasksElement}
                 </div>}
             {completedCheck && <div className="completed_task" style={theme}>
             <p className="container_completed">Completed</p>
             <button className="theme_completed"
                     style={theme}
                     onClick={toggleTheme}
                      >Theme Completed
             </button>
                {completedTasks}
                 </div>}
    </div>)
}
function AppWithThemeProvider() {
    return (
      <ThemeProvider>
         <TodoList />
      </ThemeProvider>
    );
  }

export default AppWithThemeProvider;