import React from 'react';

const ThemeToggle = ({ darkMode, toggleTheme }) => {
  return (
    <div className="d-flex justify-content-end p-3">
      <button className="btn btn-secondary" onClick={toggleTheme}>
        {darkMode ? 'Light Mode' : 'Dark Mode'}
      </button>
    </div>
  );
};

export default ThemeToggle;