import React from 'react';

export default function Resume() {
  return (
    <div>
      <h2>Resume</h2>
      <p>
        You can download my resume{' '}
        <a href="./DuranAntonioResume.pdf" download="Duran-Antonio-Resume">
          here
        </a>
        .
      </p>
      <h5>Front-end Proficiencies</h5>
      <ul>
        <li>HTML</li>
        <li>CSS</li>
        <li>JavaScript</li>
        <li>jQuery</li>
        <li>Bootstrap</li>
        <li>Responsive Design</li>
        <li>React</li>
      </ul>
      <h5>Back-end Proficiencies</h5>
      <ul>
        <li>APIs</li>
        <li>SQL, Sequelize</li>
        <li>MongoDB, Mongoose</li>
        <li>Node</li>
        <li>Express</li>
      </ul>
    </div>
  );
}
