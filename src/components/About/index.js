import React from 'react';
import self from '../../assets/images/self.png';

function About() {
  return (
    <section className="my-5">
      <div className="my-2">
        <div className="profile-img my-5">
        <img src={self} alt=" My photo" style={{ fontSize: "96px" }} />
        </div>
        <p>
        I am a entry level Full Stack Web Developer with a background in Health Science. 
        Trained at the University of Richmond's coding boot camp, I earned a certificate in full-stack web development. 
        I am a innovative problem-solver passionate about developing apps; focused on mobile-first design and development. 
        My strengths lie in creativity, teamwork, and building projects from ideation to execution. 
        My thinking process is supported by the fact that i've touched technology all of my life, so it's nice being behind the scenes.
        </p>
      </div>
    </section>
  );
}

export default About;
