import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import Login from './Login-Page/login';
import Mainpage from './Mainpage/mainpage';
import Bank from './function/bank/bank';
import Phone from './function/phone/phone';
import Balance from './function/Balance/balance';

function App() {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [currentBalance, setCurrentBalance] = useState(50000); // Initial balance is 50,000 points
  const [transactionHistory, setTransactionHistory] = useState([]);

  return (
    <Router>
      <div className="App">
        {isLoggedIn ? (
          <Routes>
            <Route path="/" element={<Mainpage />} />
            <Route 
              path="/bank" 
              element={<Bank 
                currentBalance={currentBalance} 
                setCurrentBalance={setCurrentBalance} 
                setTransactionHistory={setTransactionHistory} 
                transactionHistory={transactionHistory} 
              />} 
            />
            <Route path="/phone" element={<Phone />} />
            <Route 
              path="/balance" 
              element={<Balance 
                currentBalance={currentBalance} 
                transactionHistory={transactionHistory} 
              />} 
            />
          </Routes>
        ) : (
          <Login onLoginSuccess={() => setIsLoggedIn(true)} />
        )}
      </div>
    </Router>
  );
}

export default App;
