import React from "react";
import { Link } from "react-router-dom";

const About = () => {
  return (
    <div className="container">
      <h1>About Us</h1>
      <p>
        Welcome to our job portal website, where you can search for your next
        career opportunity.
      </p>
      <p>
        Our website connects job seekers with employers by providing a platform
        where they can find the right fit for their skills and experience.
      </p>
      <p>
        At our website, we strive to provide a seamless experience for both job
        seekers and employers. Our advanced search functionality and
        user-friendly interface make it easy to find the perfect job or
        candidate.
      </p>
      <h2>Our Team</h2>
      <p>
        We are a team of passionate professionals who are dedicated to helping
        job seekers and employers achieve their goals. Our team consists of
        experienced developers, designers, and marketers who work together to
        create the best possible experience for our users.
      </p>
      <h2>Contact Us</h2>
      <p>
        If you have any questions or feedback, please don't hesitate to{" "}
        <Link to="/contactus">contact us</Link>. We are always happy to hear
        from our users and are committed to providing the best possible support.
      </p>
    </div>
  );
};

export default About;
