import React from 'react';

/**
 * LoadButton Component - Contains the Load Button and functionality
 */
const LoadButton = ({ handleLoad }) => {

    // Function to handle loading the file and changing contents
    const handleFileChange = (e) => {
        const file = e.target.files[0];
        const reader = new FileReader();

        // Read file contents and parse to handleLoad function
        reader.onload = (event) => {
            const content = event.target.result;
            handleLoad(content);
        };
        reader.readAsText(file);

    };

    return (
        <div>
            <input type="file" onChange={handleFileChange} accept=".json" />
        </div>
    );
};

export default LoadButton;
