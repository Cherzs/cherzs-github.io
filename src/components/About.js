import React from 'react';
import Projects from './Projects'; // Import the Projects component

const About = () => {
  return (
    <div>
      <section id="banner" className="banner">
        <div className="banner-content">
          <h1>Welcome to My Portfolio</h1>
          <p>Explore my journey in Data Science and Machine Learning</p>
        </div>
      </section>
      <section id="about" className="section">
        <div className="container">
          <div className="section-header">
            <h2 className="section-title">About Me</h2>
            <div className="section-underline"></div>
          </div>
          <div className="about-content">
            <div className="profile-left">
              <div className="profile-summary">
                <h3>Muhammad Zhafran Ghaly</h3>
                <p>Data Science & Machine Learning Enthusiast</p>
                <p>Informatics Graduate from Universitas Amikom Yogyakarta</p>
                <p>Location: Sleman, Yogyakarta, Indonesia</p>
              </div>
              <div className="profile-skills">
                <h4>Skills</h4>
                <ul>
                  <li>Python</li>
                  <li>JavaScript</li>
                  <li>Data Analysis</li>
                </ul>
              </div>
            </div>
            <div className="profile-right">
              <h4>Experience</h4>
              <p>Worked on various data science projects, including predictive modeling and data visualization.</p>
              <p>Participated in hackathons and coding competitions, enhancing problem-solving skills.</p>
              <p>Interned at a tech company, focusing on machine learning applications.</p>
            </div>
          </div>
        </div>
      </section>
      <Projects /> {/* Add the Projects component here */}
    </div>
  );
};

export default About; 