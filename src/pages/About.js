import React from "react";
import { Layout } from "../components/Layout";

function About() {
  return (
    <Layout>
      <div className="aboutContainer">
        <img
          className="sr-only"
          alt="Brian Palay"
          src="/src/assets/images/bpSweater.jpg"
        />
        <div className="jumbotron jumbotron-fluid shadow"></div>
        <section className="container my-5">
          <h2 className="container pb-2 border-bottom" id="aboutme">
            About Me
          </h2>
          <p className="pt-2">
            Blending design thinking, tech, creativity, and a business mindset:
          </p>
          <ul className="pt-2">
            <li>B.A. Architecture</li>
            <li>M.B.A.</li>
            <li>UX Design</li>
            <li>Front-End Development</li>
            <li>Marketing</li>
            <li>Guitarist/Vocalist</li>
          </ul>

          <p className="pt-2"></p>
        </section>
      </div>
    </Layout>
  );
}

export default About;
