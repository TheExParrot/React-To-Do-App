import React from 'react';

/**
 * SaveButton Component - Saves given task list as .json file
 */
const SaveButton = ({ tasks }) => {
    // Converts list of task strings to .json and saves it
    const handleSave = () => {
        const jsonContent = JSON.stringify(tasks);

        const element = document.createElement('a');
        const file = new Blob([jsonContent], { type: 'application/json' });
        element.href = URL.createObjectURL(file);
        element.download = 'tasklist.json';
        document.body.appendChild(element);
        element.click();
        document.body.removeChild(element);
    };

    return <button onClick={handleSave}>Save List</button>;
};

export default SaveButton;