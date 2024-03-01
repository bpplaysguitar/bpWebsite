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
            Hi, my name is Brian Palay, and I'm a UX designer and web developer.
            Welcome to my website!
          </p>
          <p className="pt-2">
            Design has always been a big part of my life. I graduated from the
            University of Minnesota with a Bachelor of Arts in architecture.
            From there, I spent quite a few years working with all sorts of
            digital design programs, from photo editing to CAD to 3D modeling.
          </p>
          <p className="pt-2">
            With my sights set on entering the tech world, I completed a
            six-month web development boot camp at the University of Minnesota
            in 2021, earning a certification in full-stack web development. To
            complement my newly-acquired development skill set, I also completed
            Google's UX design professional certificate course, and was able to
            start working in UX design at the same time, learning from both over
            the next two years.
          </p>
          <p className="pt-2 pb-5">
            Outside of work, I enjoy playing music - which I do professionally
            some weekends, renovating my house, and learning about AI and prompt
            engineering, and how that will likely become a standard practice
            within UX design.
          </p>
        </section>
      </div>
    </Layout>
  );
}

export default About;
