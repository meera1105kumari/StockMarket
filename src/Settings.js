import React, { useState } from 'react';

const Settings = () => {
  const [darkMode, setDarkMode] = useState(false);
  const [notifications, setNotifications] = useState(true);

  const toggleDarkMode = () => {
    setDarkMode(!darkMode);
    // Implement logic to toggle dark mode in your application
  };

  const toggleNotifications = () => {
    setNotifications(!notifications);
    // Implement logic to toggle notifications in your application
  };

  return (
    <div>
      <h2>Settings</h2>
      <div>
        <label>
          Dark Mode:
          <input
            type="checkbox"
            checked={darkMode}
            onChange={toggleDarkMode}
          />
        </label>
      </div>
      <div>
        <label>
          Notifications:
          <input
            type="checkbox"
            checked={notifications}
            onChange={toggleNotifications}
          />
        </label>
      </div>
    </div>
  );
};

export default Settings;
