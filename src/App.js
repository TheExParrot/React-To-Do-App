import React from 'react';
import TaskList from "./TaskList";

/**
 * App Component - Acts as the main manager of the application
 */
const App = () => {
    return (
        <div>
            <h1>To-Do App</h1>
            <TaskList/>
        </div>
    )
};

export default App;