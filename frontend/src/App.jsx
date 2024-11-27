import React from 'react';
import Navbar from './components/Navbar';
import Welcome from './components/Welcome';
import DashboardGrid from './components/DashboardGrid';
import './App.css';

const App = () => {
  return (
    <div className="app">
      <Navbar />
      <Welcome />
      <DashboardGrid />
    </div>
  );
};

export default App;
