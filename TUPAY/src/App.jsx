// src/App.js
import React, { useState } from 'react';
import Login from './Login-Page/login';
import Mainpage from './Mainpage/mainpage';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  return (
    <div className="App">
      {isLoggedIn ? (
        <Mainpage />
      ) : (
        <Login onLoginSuccess={() => setIsLoggedIn(true)} />
      )}
    </div>
  );
}

export default App;
