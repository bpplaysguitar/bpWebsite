import React from "react";
import prototypePreview from "../assets/images/prototype.gif";
import slideCover from "../assets/images/slide-cover.png";
import timesaverSlideCover from "../assets/images/timesaver-slide-cover.png";
import timesaverGifPreview from "../assets/images/timesaver-gif-preview.gif";
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
            <p className="my-4">
              These are projects I made during the{" "}
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.coursera.org/professional-certificates/google-ux-design"
              >
                Google UX Design Professional Certificate
              </a>{" "}
              course on Coursera. The projects took me through many stages of UX
              design, inlcuding paper wireframes, low-fidelity wireframes in
              Figma, high-fiedelity wireframes in Figma, prototyping, and user
              testing. Please seee the Figma prototypes and Google slide decks
              for more details on the projects.
            </p>
            <h4 className="pb-2 pt-4">Timesaver - Savings Tracking Website</h4>

            <div className="my-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.figma.com/proto/Lc6FeW6YSog78VdbBz8wed/Timesaver?type=design&node-id=62-904&t=ZhYyHnp8X1WUxMyc-1&scaling=min-zoom&page-id=62%3A903&starting-point-node-id=62%3A904&show-proto-sidebar=1&mode=design"
              >
                <img
                  className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded"
                  alt="Mobile phone frame displaying screenshot of sandwich shop app prototype"
                  src={timesaverGifPreview}
                />
              </a>
            </div>
            <h5 className="my-3 mx-auto text-center pb-5">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.figma.com/proto/Lc6FeW6YSog78VdbBz8wed/Timesaver?type=design&node-id=62-904&t=ZhYyHnp8X1WUxMyc-1&scaling=min-zoom&page-id=62%3A903&starting-point-node-id=62%3A904&show-proto-sidebar=1&mode=design"
              >
                Interact with the Figma prototype
              </a>
            </h5>
            <div className="py-7">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/presentation/d/1Mo9Q75YgpeVDBWniF2x6C5cxeP9J_j9nLYjGy8dQR5o/edit?usp=sharing"
              >
                <img
                  className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded"
                  alt="Cover slide for sandwich app slideshow"
                  src={timesaverSlideCover}
                />
              </a>
            </div>
            <h5 className="my-3 pb-5 mx-auto text-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/presentation/d/1Mo9Q75YgpeVDBWniF2x6C5cxeP9J_j9nLYjGy8dQR5o/edit?usp=sharing"
              >
                View Google Slides deck
              </a>
            </h5>
          </div>
          <div className="col border-top py-5">
            <h4 className="pb-2 pt-4">Taste-E Sandwich - Sandwich Shop App</h4>

            <div className="my-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.figma.com/proto/dCpvMiEMaJPJiw4HYDNvwk/Portfolio-Wireframes-UPDATED-v3?type=design&node-id=109-408&t=LvdSYcdk0uc65ivK-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=109%3A408&mode=design"
              >
                <img
                  className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded"
                  alt="Mobile phone frame displaying screenshot of sandwich shop app prototype"
                  src={prototypePreview}
                />
              </a>
            </div>
            <h5 className="my-3 mx-auto text-center pb-5">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://www.figma.com/proto/dCpvMiEMaJPJiw4HYDNvwk/Portfolio-Wireframes-UPDATED-v3?type=design&node-id=109-408&t=LvdSYcdk0uc65ivK-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=109%3A408&mode=design"
              >
                Interact with the Figma prototype
              </a>
            </h5>
            {/* <div className="my-4">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/presentation/d/1Lpl2apYXFdKpum3LJr-YnqZx3b1hFd0bsE3ZfXWDG2E/edit?usp=sharing"
              >
                <img
                  className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded"
                  alt="Cover slide for sandwich app slideshow"
                  src={slideCover}
                />
              </a>
            </div> */}
            {/* <h5 className="my-3 pb-5 mx-auto text-center">
              <a
                target="_blank"
                rel="noreferrer"
                href="https://docs.google.com/presentation/d/1Lpl2apYXFdKpum3LJr-YnqZx3b1hFd0bsE3ZfXWDG2E/edit?usp=sharing"
              >
                View Google Slides deck
              </a>
            </h5> */}
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Project4;
