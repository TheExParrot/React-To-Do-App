import React, {useState} from 'react';
import TaskList from "./TaskList";
import SaveButton from "./SaveButton";

/**
 * App Component - Acts as the main manager of the application
 */
const App = () => {
    // Store list of tasks
    const [tasks, setTasks] = useState([]);

    // Append new task to task list
    const handleAddTask = (newTask) => {
        if (newTask.trim() !== '') {
            setTasks([...tasks, newTask]);
        }
    };

    // Remove specific task from task list
    const handleRemoveTask = (index) => {
        const updatedTasks = [...tasks];
        updatedTasks.splice(index, 1);
        setTasks(updatedTasks);
    };

    return (
        <div>
            <h1>Task List</h1>
            <TaskList
                tasks={tasks}
                handleAddTask={handleAddTask}
                handleRemoveTask={handleRemoveTask}
            />
            <SaveButton tasks={tasks} />
        </div>
    );
};

export default App;