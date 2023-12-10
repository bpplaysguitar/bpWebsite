import React from "react";
import prototypePreview from "../assets/images/prototype.gif";
import { Layout } from "../components/Layout";

function Project4() {
  return (
    <Layout>
      <main className="container">
        <h2 className="container pb-2 pt-4 border-bottom" id="project4">
          UX Design Certification Course Project
        </h2>

        <section className="text-center">
          <section id="resume-page-main"></section>
        </section>
        <div className="container my-4" id="">
          <div className="col">
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
            <div className="iframe my-5">
              <iframe
                src="https://docs.google.com/presentation/d/e/2PACX-1vRwcE5aXHoV9-LGhGDmLxmEPtE7O4vkRhCwGztfyG2Qvsj31NhexSqXbR-vE_mc4OqWaru8T6a44X7A/embed?start=false&loop=false&delayms=15000"
                className="d-block mx-auto shadow border border-3 border-dark mb-3 rounded"
                frameborder="0"
                width="960"
                height="569"
                allowfullscreen="true"
                mozallowfullscreen="true"
                webkitallowfullscreen="true"
              ></iframe>
            </div>
            <p className="my-5 mx-auto text-center">
              <a
                target="_blank"
                href="https://docs.google.com/presentation/d/1Lpl2apYXFdKpum3LJr-YnqZx3b1hFd0bsE3ZfXWDG2E/edit?usp=sharing"
              >
                View Google Slides deck
              </a>
            </p>

            <p className="my-4">
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
            </p>
            <p className="my-3 mx-auto text-center">
              <a
                target="_blank"
                href="https://www.figma.com/proto/dCpvMiEMaJPJiw4HYDNvwk/Portfolio-Wireframes-UPDATED-v3?type=design&node-id=109-408&t=LvdSYcdk0uc65ivK-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=109%3A408&mode=design"
              >
                Interact with the Figma Prototype
              </a>
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Project4;
