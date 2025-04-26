import React from 'react';
import { Link } from 'react-router-dom'; 
import './mainpage.css';
import { FaMoneyCheckAlt, FaMobileAlt, FaWallet, FaGift, FaCoins, FaTrophy } from 'react-icons/fa';
import { motion } from 'framer-motion';
import logo from '../assets/T.jpg'; 

const Mainpage = () => {
  return (
    <div className="mainpage-container">
      <header className="main-header">
        <img src={logo} alt="TU PAY Logo" className="logo-image" />
        <h1>Welcome to TU-PAY</h1>
        <p>Your personal banking dashboard</p>
      </header>

      <h2 style={{ textAlign: 'center' }}>Banking Options</h2>
      <section className="banking-options">
        
        {/* Link to Bank */}
        <Link to="/bank" style={{ textDecoration: 'none', color: 'inherit' }}>
          <motion.div 
            className="option-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaMoneyCheckAlt className="option-icon" />
            <h3>Transfer to Bank Account</h3>
            <p>Send money directly to any bank account securely and instantly.</p>
          </motion.div>
        </Link>

        {/* Link to Phone */}
        <Link to="/phone" style={{ textDecoration: 'none', color: 'inherit' }}>
          <motion.div 
            className="option-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaMobileAlt className="option-icon" />
            <h3>Transfer to Phone Number</h3>
            <p>Send money easily to contacts using their mobile number.</p>
          </motion.div>
        </Link>

        {/* Link to Balance */}
        <Link to="/balance" style={{ textDecoration: 'none', color: 'inherit' }}>
          <motion.div 
            className="option-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaWallet className="option-icon" />
            <h3>Check Balance</h3>
            <p>View your available balance and recent transactions.</p>
          </motion.div>
        </Link>

      </section>

      <section className="credit-section">
        <h2 className="credit-title">Your Credits</h2>
        <div className="credit-options">
          <motion.div 
            className="credit-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaGift className="option-icon" />
            <h3>Cashbacks</h3>
            <p>Click to see your cashback rewards</p>
          </motion.div>

          <motion.div 
            className="credit-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaCoins className="option-icon" />
            <h3>Rewards</h3>
            <p>Unlock special offers and exclusive rewards.</p>
          </motion.div>

          <motion.div 
            className="credit-card"
            whileHover={{ scale: 1.05 }}
            transition={{ duration: 0.3 }}
          >
            <FaTrophy className="option-icon" />
            <h3>Points Earned</h3>
            <p>You have earned 50,000 points this month!</p>
          </motion.div>
        </div>
      </section>
    </div>
  );
};

export default Mainpage;
