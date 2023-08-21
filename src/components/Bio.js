// components/Bio.js
import React from 'react';
import { Row } from 'reactstrap';
import profilePic from '../img/profile_pic.png';

const Bio = () => (
  <div>
    <div
      className="profile-photo-placeholder rounded-circle d-inline-flex justify-content-center align-items-center shadow-lg"
      style={{
        width: '300px',
        height: '300px',
        background: '#f0f0f0',
        backgroundImage: `url(${profilePic})`,
        backgroundSize: 'cover',
        backgroundPosition: 'center',
      }}
    >
      {/* Displayed if the image doesn't load or is missing
      <span className="text-muted">Photo</span> */}
    </div>
    <div className='profile-name text-center'>Yaroslav Grogul</div>
    <div className='project-card card border-0 shadow bio-card'>
      <Row>
        <h2>Bio: </h2>
      </Row>
      <Row>
        <p className="mt-2 bio-text">
          Hello, I'm <strong>Yaroslav Grogul</strong>, a seasoned <strong>Qlik developer</strong> with a passion 
          for <strong>fullstack JavaScript</strong> projects. My journey began with a diverse academic background 
          in <strong>economics, finances</strong>, and <strong>computer science</strong>, pursued 
          during my master's program at <strong>RANEPA</strong> in Moscow. At <strong>Sberbank</strong>, I spent 3.5 years as a dedicated Qlik 
          developer, crafting dashboards and reports that unveiled the power of data analysis. My skill set expanded 
          to include <strong>Powershell, Python</strong>, and <strong>SQL</strong> as I navigated through various projects.
        </p>
        <p className="mt-2 bio-text">
          In pursuit of a broader horizon, I embarked on a personal initiative that led me into the realms of <strong>node.js, 
          ReactJS, ExpressJS, Jenkins</strong>. Beyond the screen, I'm captivated by the world of sport and motorsport, 
          particularly <strong>F1</strong>. My fascination with intricate real-world projects, like 
          constructing a complex puzzle, fuels my appreciation for the brilliance of human ingenuity.
        </p>
        <p className="mt-2 bio-text">
          I pride myself on completing tasks ahead of deadlines, relishing the sense of accomplishment it brings. 
          My core philosophy centers around the pursuit of what truly captivates me, believing that genuine interest 
          paves the path to success. With a penchant for embracing responsibility, my goal is to orchestrate increasingly 
          complex projects involving diverse teams. Presently, I'm actively seeking 
          new <strong>IT-related challenges</strong> to fuel my growth and expand my expertise.
        </p>
      </Row>
    </div>
  </div>
);

export default Bio;
