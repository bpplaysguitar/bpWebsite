import React from "react";
import prototypePreview from "../assets/images/prototype.gif";
import slideCover from "../assets/images/slide-cover.png";
import timesaverHome from "../assets/images/timesaver-home.jpg";
import timesaverWatches from "../assets/images/timesaver-watches.jpg";
import { Layout } from "../components/Layout";

function Project4() {
  return (
    <Layout>
      <main className="container">
        <h2 className="container pb-2 pt-4 border-bottom" id="project4">
          UX Design Case Studies
        </h2>

        <section className="text-center">
          <section id="resume-page-main"></section>
        </section>
        <div className="container my-4" id="">
          <div className="col">
            <h4 className="pb-2 pt-4">Sandwich Shop App</h4>
            <p className="my-4">
              This is a project I made during the{" "}
              <a
                target="_blank"
                href="https://www.coursera.org/professional-certificates/google-ux-design"
              >
                Google UX Design Professional Certificate
              </a>{" "}
              course on Coursera. I designed a sandwich shop app. The process
              took me through many phases of UX design, inlcuding paper
              wireframes, low-fidelity wireframes in Figma, high-fiedelity
              wireframes in Figma, prototyping, and user testing. Please seee
              the slide deck for more details on this project.
            </p>

            <div className="my-4">
              <a
                target="_blank"
                href="https://www.figma.com/proto/dCpvMiEMaJPJiw4HYDNvwk/Portfolio-Wireframes-UPDATED-v3?type=design&node-id=109-408&t=LvdSYcdk0uc65ivK-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=109%3A408&mode=design"
              >
                <img
                  className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded"
                  alt="Mobile phone frame displaying screenshot of sandwich shop app prototype"
                  src={prototypePreview}
                />
              </a>
            </div>
            <p className="my-3 mx-auto text-center">
              <a
                target="_blank"
                href="https://www.figma.com/proto/dCpvMiEMaJPJiw4HYDNvwk/Portfolio-Wireframes-UPDATED-v3?type=design&node-id=109-408&t=LvdSYcdk0uc65ivK-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=109%3A408&mode=design"
              >
                Interact with the Figma prototype
              </a>
            </p>
            <div className="my-4">
              <a
                target="_blank"
                href="https://docs.google.com/presentation/d/1Lpl2apYXFdKpum3LJr-YnqZx3b1hFd0bsE3ZfXWDG2E/edit?usp=sharing"
              >
                <img
                  className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded"
                  alt="Cover slide for sandwich app slideshow"
                  src={slideCover}
                />
              </a>
            </div>
            <p className="my-5 mx-auto text-center">
              <a
                target="_blank"
                href="https://docs.google.com/presentation/d/1Lpl2apYXFdKpum3LJr-YnqZx3b1hFd0bsE3ZfXWDG2E/edit?usp=sharing"
              >
                View Google Slides deck
              </a>
            </p>
          </div>
          <h4 className="pb-2 pt-4">
            On my desk: Responsive Website for Savings Goals
          </h4>
          <p className="my-4">
            This is what I'm working on right now. The UX design certification
            course suggested a list of prompts to design for, and one was a
            website that helped people save money for a goal, i.e. a vacation. I
            liked the idea, but I'm putting my own spin on it, and making it a
            website to help pepole realize savings for the watches they want.
            It's a fun way to blend a hobby of mine with my UX studies. The
            concept is that it would be free for users, and supported by
            advertising partners; I am creating mock ads for that. Below are the
            home page, and the page for exploring more watches, seen in their
            current and first iterations. User testing will surely change things
            about them when I get to that point in the design process.
          </p>
          <img
            className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded"
            alt="Screenshot of timersaver website homepage"
            src={timesaverHome}
          />
          <img
            className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded"
            alt="Screenshot of timersaver website with many watches"
            src={timesaverWatches}
          />
        </div>
      </main>
    </Layout>
  );
}

export default Project4;
