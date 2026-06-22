import React from 'react'

const About = () => {
  return (
    <div className="about-container">
      <h3 className="about-heading">About This Project</h3>
      <div className="about-card">
        <p className="about-text">
          Welcome to your high-performance task management companion. This Todo List application is engineered 
          using modern React.js architecture and features responsive layout frameworks designed to help you organize 
          your daily goals efficiently. 
        </p>
        <p className="about-text">
          Lorem ipsum dolor sit amet consectetur, adipisicing elit. Doloremque libero quidem quaerat repellendus. 
          Aut accusamus quae vero dolorem eveniet eligendi quaerat cum animi numquam sint earum dignissimos, maxime 
          totam recusandae quos ad perferendis. Magnam impedit alias ab reprehenderit ea labore ipsum numquam nobis 
          reiciendis fugit iste necessitatibus, porro voluptates in.
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
