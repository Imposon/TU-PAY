import React, { useState } from 'react';
import './bank.css';
import logo from '../../assets/T.jpg';  // Correct path to logo image

const Bank = ({ currentBalance, setCurrentBalance, setTransactionHistory }) => {
  const [amount, setAmount] = useState('');
  const [accountNumber, setAccountNumber] = useState('');
  const [ifscCode, setIfscCode] = useState('');
  const [error, setError] = useState('');
  const [showPopup, setShowPopup] = useState(false);
  const [paymentAmount, setPaymentAmount] = useState(null);  // State to store the amount temporarily

  const handlePayment = () => {
    if (!accountNumber || !ifscCode || !amount) {
      setError('Please fill all fields!');
      return;
    }

    if (parseFloat(amount) > currentBalance) {
      setError('Insufficient balance!');
      return;
    }

    // Store the payment amount temporarily before clearing the inputs
    const newBalance = currentBalance - parseFloat(amount);
    setPaymentAmount(amount);  // Set payment amount to be displayed in the popup

    // Update balance
    setCurrentBalance(newBalance);

    // Update transaction history
    setTransactionHistory((prevHistory) => [
      ...prevHistory,
      { type: 'Transfer', amount: `₹${amount}`, to: accountNumber, date: new Date().toLocaleString() }
    ]);

    // Show popup for confirmation
    setShowPopup(true);

    // Clear input fields after payment
    setAmount('');
    setAccountNumber('');
    setIfscCode('');
  };

  const closePopup = () => {
    setShowPopup(false);
  };

  return (
    <div className="bank-container">
      <img src={logo} alt="TU PAY Logo" className="logo-image" />
      <h2 style={{ textAlign: 'center' }}>Transfer to Bank Account</h2>
      <form className="bank-form">
        <input
          type="text"
          placeholder="Receiver's Bank Account Number"
          value={accountNumber}
          onChange={(e) => setAccountNumber(e.target.value)}
        />
        <input
          type="text"
          placeholder="Receiver's IFSC Code"
          value={ifscCode}
          onChange={(e) => setIfscCode(e.target.value)}
        />
        <input
          type="number"
          placeholder="Amount to Transfer"
          value={amount}
          onChange={(e) => setAmount(e.target.value)}
        />
        {error && <p className="error-message">{error}</p>}
        <button type="button" onClick={handlePayment}>Confirm Payment</button>
      </form>

      {showPopup && (
        <div className="popup">
          <div className="popup-content">
            <h3>Payment Successful!</h3>
            <p>₹{paymentAmount} has been deducted from your balance.</p>
            <button onClick={closePopup}>Close</button>
          </div>
        </div>
      )}


    </div>
  );
};

export default Bank;
