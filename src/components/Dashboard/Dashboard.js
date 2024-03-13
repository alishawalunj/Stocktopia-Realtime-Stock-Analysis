import React from 'react';
import './Dashboard.css';

const Dashboard = () => {
  return (
    <div className="dashboard">
      <h1>STOCKTOPIA</h1>
      <div className="main-content">
        <p>Welcome to your Stocktopia!</p>
        <div>
          <a href="/stocks">View Stocks</a>
        </div>
        <div>
          <a href="/watchlist">View Watchlist</a>
        </div>
        <div>
          <a href="/portfolio">View Portfolio</a>
        </div>
        <div>
          <a href="/transactions">View Transactions</a>
        </div>
        <div>
          <a href="/profile">View Profile</a>
        </div>
        <div>
          <a href="/settings">View Settings</a>
        </div>
        <div>
          <a href="/logout">Logout</a>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;