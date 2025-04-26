// login.jsx
import { useState, useEffect } from 'react';
import './login.css';


const Login = ({ onLoginSuccess }) => {
  const [action, setAction] = useState('signup');
  const [bgColor, setBgColor] = useState('#8e44ad');
  const [signupData, setSignupData] = useState({
    name: '',
    email: '',
    card: '',
    cvv: '',
    password: ''
  });
  const [loginData, setLoginData] = useState({
    email: '',
    password: ''
  });

  useEffect(() => {
    const colors = ['#8e44ad', '#3498db', '#e74c3c', '#2ecc71', '#f39c12'];
    let index = 0;
    const interval = setInterval(() => {
      index = (index + 1) % colors.length;
      setBgColor(colors[index]);
    }, 4000);
    return () => clearInterval(interval);
  }, []);

  const handleSignupChange = (e) => {
    setSignupData({ ...signupData, [e.target.name]: e.target.value });
  };

  const handleLoginChange = (e) => {
    setLoginData({ ...loginData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (action === 'signup') {
      if (Object.values(signupData).some(val => val === '')) {
        alert('Please fill in all fields.');
      } else {
        alert('Signed up successfully! Now login.');
        setAction('login');
      }
    } else {
      if (
        loginData.email === signupData.email &&
        loginData.password === signupData.password
      ) {
        alert('Congratulations! 50000 points have been credited in your demo account.');
        onLoginSuccess();
      } else {
        alert('Sorry, try again.');
      }
    }
  };

  return (
    <div className="app" style={{ background: `linear-gradient(135deg, ${bgColor}, #ffffff)` }}>
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
        <form className="form" onSubmit={handleSubmit}>
          {action === 'signup' && (
            <>
              <div className="input-group">
                <label>Name</label>
                <input name="name" type="text" placeholder="Enter your name" onChange={handleSignupChange} />
              </div>
              <div className="input-group">
                <label>Email</label>
                <input name="email" type="email" placeholder="Enter your email" onChange={handleSignupChange} />
              </div>
              <div className="input-group">
                <label>Card Number</label>
                <input name="card" type="text" placeholder="Enter your card number" onChange={handleSignupChange} />
              </div>
              <div className="input-group">
                <label>CVV</label>
                <input name="cvv" type="text" placeholder="Enter your CVV" onChange={handleSignupChange} />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input name="password" type="password" placeholder="Enter your password" onChange={handleSignupChange} />
              </div>
            </>
          )}
          {action === 'login' && (
            <>
              <div className="input-group">
                <label>Email</label>
                <input name="email" type="email" placeholder="Enter your email" onChange={handleLoginChange} />
              </div>
              <div className="input-group">
                <label>Password</label>
                <input name="password" type="password" placeholder="Enter your password" onChange={handleLoginChange} />
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
