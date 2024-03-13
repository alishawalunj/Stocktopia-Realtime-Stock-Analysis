import React from 'react';
import './App.css';
import Dashboard from './components/Dashboard/Dashboard';
import Sidebar from './components/Sidebar/Sidebar';

function App() {
  return (
    <div className="App">
      <Dashboard /> 
      <Sidebar />
    </div>
  );
}

export default App;
