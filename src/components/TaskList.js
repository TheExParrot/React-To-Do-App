import React, { useState } from 'react';

/**
 * TaskList Component - Contains the List of Tasks and functionality
 */
const TaskList = ({ tasks, handleAddTask, handleRemoveTask }) => {

    // Props to manage new tasks
    const [newTask, setNewTask] = useState('');

    // Function to Handle Input Changes and write characters to newTask
    const handleInputChange = (e) => {
        setNewTask(e.target.value);
    };

    // Function to handle enter press and then add new task when pressed
    const handleKeyPress = (e) => {
        if (e.key === 'Enter') {
            handleAddTask(newTask);
            addTask();
        }
    }

    // Function to add tasks to the list of tasks
    const addTask = () => {
        if (newTask.trim() !== '') {
            handleAddTask(newTask);
            setNewTask('');
        }
    };

    // Function to remove a task from the list of tasks
    const removeTask = (index) => {
        handleRemoveTask(index);
    };

    // HTML Return
    return (
        <div className="task-list-container">
            <div className="input-container">
                <input
                    type="text"
                    className="task-input"
                    value={newTask}
                    onChange={handleInputChange}
                    onKeyDown={handleKeyPress}
                    placeholder="Enter a new task"
                />
                <button className="add-button" onClick={addTask}>Add Task</button>
            </div>

            <ul className="task-list">
                {tasks.map((task, index) => (
                    <li key={index} className="task-item">
                        <span>{task}</span>
                        <button className="remove-button" onClick={() => removeTask(index)}>X</button>
                    </li>
                ))}
            </ul>
        </div>
    );


};

export default TaskList;
