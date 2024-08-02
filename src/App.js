import React from 'react';
import { useState } from 'react';
import './App.css';
import UserProfile from './components/UserProfile';
import UserContext from './contexts/UserContext';

function App() {
  const [isOnline, setIsOnline] = useState(false);

  return (
    <UserContext.Provider
      value={{ isOnline: isOnline, setIsOnline: setIsOnline }}
    >
      <UserProfile />
    </UserContext.Provider>
  );
}

export default App;
