import React from 'react';
import './DashboardGrid.css';

const DashboardGrid = () => {
  return (
    <div className="dashboard-grid">
      <div className="card">
        <h2>My Courses</h2>
        <ul>
          <li>Course 1 - <span>75% Completed</span></li>
          <li>Course 2 - <span>50% Completed</span></li>
        </ul>
      </div>
      <div className="card">
        <h2>Upcoming Deadlines</h2>
        <ul>
          <li>Assignment 1 - <span>28th Nov</span></li>
          <li>Quiz 2 - <span>30th Nov</span></li>
        </ul>
      </div>
      <div className="card">
        <h2>Uploaded Resources</h2>
        <ul>
          <li>Resource 1 - <span>PDF</span></li>
          <li>Resource 2 - <span>Presentation</span></li>
        </ul>
      </div>
    </div>
  );
};

export default DashboardGrid;
