const initialState = {
      tasks: JSON.parse(localStorage.getItem('tasks') || '[]'),
      completed: JSON.parse(localStorage.getItem('completed') || '[]'),
      activeCheck: true,
      completedCheck:true,
      currentDate: ""
}

const reducer = (state = initialState, action) => {
      switch(action.type){
        case "ADD_TASK" :
            const newTask = [...state.tasks, action.payload]
            localStorage.setItem('tasks', JSON.stringify(newTask));
            return {
                ...state,
                tasks: newTask,
                currentDate:action.payload
            }
        case "ADD_TASK_COMPLETED" :
            const taskIndex = state.tasks.findIndex(task => task.id === action.payload.id);
            const newTasks = [...state.tasks];
                  newTasks.splice(taskIndex, 1);
            const newCompletedTask = [...state.completed, action.payload];
            localStorage.setItem('tasks', JSON.stringify(newTasks));
            localStorage.setItem('completed', JSON.stringify(newCompletedTask));
            return {
              ...state,
              tasks: newTasks,
              completed: newCompletedTask,
            };
        case "DELETE_TASK" :
            const deleteActiveTask = state.tasks.filter(task => task.id !== action.payload);
            const deleteCompletedTask = state.completed.filter(task => task.id !== action.payload);
            localStorage.setItem('tasks', JSON.stringify(deleteActiveTask));
            localStorage.setItem('completed', JSON.stringify(deleteCompletedTask));
            return {
              ...state,
              tasks: deleteActiveTask,
              completed: deleteCompletedTask,
            };
        case "ACTIVE_CHECK" :
            return{
              ...state,
              activeCheck: !state.activeCheck,
            }
        case "COMPLETED_CHECK" :
            return {
              ...state,
              completedCheck: !state.completedCheck
            }
        case "DELETE_ALL_TASKS" :
          const zeroTasks = state.tasks = [];
          const zeroCompleted = state.completed = [];
            localStorage.setItem('tasks', JSON.stringify(zeroTasks));
            localStorage.setItem('completed', JSON.stringify(zeroCompleted)); 
            return {
              ...state,
              tasks:zeroTasks,
              completed: zeroCompleted
            }
        default :
            return state;
      }
}
export default reducer;