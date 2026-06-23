import React from 'react'

const About = () => {
  return (
    <div className="about-container">
      <h3 className="about-heading">About This Project</h3>
      <div className="about-card">
        <p className="about-text">
          Welcome to your high-performance task management companion. This Todo List application is engineered using modern React.js architecture and features responsive layout frameworks designed to help you organize your daily goals efficiently.
        </p>
        <p className="about-text">
          Built as a milestone project in modern web development, this application prioritizes user experience, speed, and reliability. It features dynamic state management for seamless interaction and client-side persistence to keep your schedule safe across browser sessions. Every component is optimized for smooth performance and accessibility across all devices.
        </p>
        <div className="about-badge-group">
          <span className="about-badge">React 18</span>
          <span className="about-badge">Dark Theme</span>
          <span className="about-badge">Local Storage</span>
          <span className="about-badge">Bootstrap 5</span>
        </div>
      </div>
    </div>
  )
}

export default About
