export const addTask = (task) => {
     return {
        type: "ADD_TASK",
        payload:task
     }
}
export const addTaskCompleted = (task) => {
     return {
        type: "ADD_TASK_COMPLETED",
        payload: task
     }
}
export const deleteTask = (id) => {
    return {
        type:"DELETE_TASK",
        payload: id
    }
}
export const activeCheck = () => {
    return {
        type: "ACTIVE_CHECK",
        // payload: false
    }
}
export const completedCheck = () => {
    return {
        type: "COMPLETED_CHECK"
    }
}
export const deleteAllTasks = (tasks) => {
    return {
        type: "DELETE_ALL_TASKS",
        payload: tasks
    }
}