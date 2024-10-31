import React from 'react';

const Footer = () => {
  return (
    <footer id="footer" className="footer">
      <div className="footer-content">
        <div className="footer-section">
          <h3>Ghaly</h3>
          <p className="footer-description">Data Science & Machine Learning Enthusiast</p>
          <div className="social-links">
            <a href="https://www.linkedin.com/in/zhafranghaly/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-linkedin"></i>
            </a>
            <a href="https://github.com/cherzs/" target="_blank" rel="noopener noreferrer" className="social-icon">
              <i className="fab fa-github"></i>
            </a>
            <a href="mailto:zhafrang638@gmail.com?subject=Hello%20Ghaly&body=I%20saw%20your%20portfolio%20and%20would%20like%20to%20connect." className="social-icon">
              <i className="fas fa-envelope"></i>
            </a>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <p>&copy; 2024 Ghaly. All rights reserved.</p>
      </div>
    </footer>
  );
};

export default Footer; 