import React from 'react';

function Contact() {
  return (
    <section className="my-5">
      <div className="my-2">
      <p>
        If you'd like to connect, collaborate, or discuss opportunities, feel free to reach out.
        </p>
        <h3>Email:</h3>
        <ul className="links">
          <h4><a href="mailto:justinperry216@gmail.com">justinperry216@gmail.com</a></h4>
        </ul>
        <h3>LinkedIn:</h3>
        <ul className="links">
          <h4><a href="https://www.linkedin.com/in/justin-perry-3792a326a/" target="_blank">
          LinkedIn Profile
          </a></h4>
        </ul>
        <h3>GitHub:</h3>
        <ul className="links">
          <h4><a href="https://github.com/LilNewday" target="_blank">
          GitHub Profile
          </a></h4>
        </ul>
        <p>
        I'm always open to discussing software development, QA roles, and new opportunities.
        </p>
        <p> I typically respond within 24-48 hours.
        </p>
      </div>
    </section>
  );
}

export default Contact;