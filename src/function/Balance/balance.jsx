import React from 'react';
import './balance.css';

const Balance = ({ currentBalance, transactionHistory }) => {
  return (
    <div className="balance-container">
      <header>
        <h1>Your Balance</h1>
        <h3>{currentBalance} points</h3>
      </header>

      <div className="transaction-history">
        <h2>Transaction History</h2>
        <table>
          <thead>
            <tr>
              <th>Date</th>
              <th>Type</th>
              <th>Amount</th>
              <th>To/From</th>
            </tr>
          </thead>
          <tbody>
            {transactionHistory.length === 0 ? (
              <tr><td colSpan="4">No transactions yet</td></tr>
            ) : (
              transactionHistory.map((transaction, index) => (
                <tr key={index}>
                  <td>{transaction.date}</td>
                  <td>{transaction.type}</td>
                  <td>{transaction.amount}</td>
                  <td>{transaction.to || 'N/A'}</td>
                </tr>
              ))
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default Balance;
