import { useState } from 'react';
import './login.css';

const Login = () => {
  const [action, setAction] = useState('signup');
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    cardNumber: '',
    cvv: '',
    password: ''
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });
  const [error, setError] = useState('');

  const handleSignupSubmit = (e) => {
    e.preventDefault();

    // Check if all fields are filled
    if (Object.values(signupData).every(value => value !== '')) {
      setAction('login'); // Switch to login page
      setError(''); // Clear any previous errors
    } else {
      setError('Please fill out all the fields');
    }
  };

  const handleLoginSubmit = (e) => {
    e.preventDefault();

    // Check if login credentials match
    if (loginData.email === signupData.email && loginData.password === signupData.password) {
      alert('Login successful');
    } else {
      setError('Sorry, try again');
    }
  };

  return (
    <div className="app">
      <div className="form-container">
        <div className="toggle-buttons">
          <button
            className={action === 'signup' ? 'active' : ''}
            onClick={() => setAction('signup')}
          >
            Sign Up
          </button>
          <button
            className={action === 'login' ? 'active' : ''}
            onClick={() => setAction('login')}
          >
            Login
          </button>
        </div>

        {error && <div className="error">{error}</div>}

        <form
          className="form"
          onSubmit={action === 'signup' ? handleSignupSubmit : handleLoginSubmit}
        >
          {action === 'signup' && (
            <>
              <div className="input-group">
                <label>Name</label>
                <input
                  type="text"
                  placeholder="Enter your name"
                  value={signupData.name}
                  onChange={(e) =>
                    setSignupData({ ...signupData, name: e.target.value })
                  }
                />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={signupData.email}
                  onChange={(e) =>
                    setSignupData({ ...signupData, email: e.target.value })
                  }
                />
              </div>
              <div className="input-group">
                <label>Card Number</label>
                <input
                  type="text"
                  placeholder="Enter your card number"
                  value={signupData.cardNumber}
                  onChange={(e) =>
                    setSignupData({ ...signupData, cardNumber: e.target.value })
                  }
                />
              </div>
              <div className="input-group">
                <label>CVV</label>
                <input
                  type="text"
                  placeholder="Enter your CVV"
                  value={signupData.cvv}
                  onChange={(e) =>
                    setSignupData({ ...signupData, cvv: e.target.value })
                  }
                />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={signupData.password}
                  onChange={(e) =>
                    setSignupData({ ...signupData, password: e.target.value })
                  }
                />
              </div>
            </>
          )}

          {action === 'login' && (
            <>
              <div className="input-group">
                <label>Email</label>
                <input
                  type="email"
                  placeholder="Enter your email"
                  value={loginData.email}
                  onChange={(e) =>
                    setLoginData({ ...loginData, email: e.target.value })
                  }
                />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input
                  type="password"
                  placeholder="Enter your password"
                  value={loginData.password}
                  onChange={(e) =>
                    setLoginData({ ...loginData, password: e.target.value })
                  }
                />
              </div>
            </>
          )}

          <button type="submit" className="submit-btn">
            {action === 'signup' ? 'Sign Up' : 'Login'}
          </button>
        </form>
      </div>
    </div>
  );
};

export default Login;
