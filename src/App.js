import React, {useState} from 'react';
import TaskList from "./components/TaskList";
import SaveButton from "./components/SaveButton";
import LoadButton from "./components/LoadButton";
import './App.css';


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

    // Function to Load a file
    const handleLoad = (content) => {
        try {
            // Get JSON content
            const parsedContent = JSON.parse(content);
            if (Array.isArray(parsedContent) && parsedContent.every((task) => typeof task === 'string')) {
                // If JSON meets required format, set the task list equal to its content
                setTasks(parsedContent);
            } else {
                // Otherwise, do nothing
                console.error('Invalid JSON format. Expected an array of strings.');
            }
        } catch (error) {
            console.error('Error parsing JSON:', error);
        }
    };

    return (
        <div>
            <h1>To-Do App</h1>
            <div className="task-list-container">
                <TaskList
                    tasks={tasks}
                    handleAddTask={handleAddTask}
                    handleRemoveTask={handleRemoveTask}
                />
                <div className="button-container">
                    <SaveButton tasks={tasks} />
                    <LoadButton handleLoad={handleLoad} />
                </div>
            </div>
        </div>
    );
};

export default App;