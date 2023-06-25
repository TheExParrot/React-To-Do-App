import React, {useRef} from 'react';
import "./Button.css";

/**
 * LoadButton Component - Contains the Load Button and functionality
 */
const LoadButton = ({ handleLoad }) => {

    // Create reference object
    const fileInputRef = useRef(null);

    // Handle displayed button 'Load Tasks' click
    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

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
            <button className="load-button" onClick={handleButtonClick}>
                Load Tasks
            </button>
            <input
                ref={fileInputRef}
                type="file"
                onChange={handleFileChange}
                accept=".json"
                style={{ display: 'none' }}
            />
        </div>
    );
};

export default LoadButton;
