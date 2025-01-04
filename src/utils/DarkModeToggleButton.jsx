import { useEffect, useState } from 'react';
import { FaMoon, FaSun } from 'react-icons/fa';
import './DarkModeToggleButton.css';

const DarkModeToggleButton = () => {
    const [isDarkMode, setIsDarkMode] = useState(() => {
        return localStorage.getItem('dark-mode') === 'true';
    });

    useEffect(() => {
        document.body.classList.toggle('dark-mode', isDarkMode);
        localStorage.setItem('dark-mode', isDarkMode);
    }, [isDarkMode]);

    return (
        <span
            className="theme-toggle"
            onClick={() => setIsDarkMode(!isDarkMode)}
            onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    setIsDarkMode(!isDarkMode);
                }
            }}
            aria-label="Toggle dark mode"
            title="Click to change the theme mode"
            role="button"
            tabIndex={0}
        >
            {isDarkMode ? <FaSun /> : <FaMoon />}
        </span>
    );
};

export default DarkModeToggleButton;
