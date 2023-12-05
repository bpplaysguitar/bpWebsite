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
              I am working on completing the{" "}
              <a
                target="_blank"
                href="https://www.coursera.org/professional-certificates/google-ux-design"
              >
                Google UX Design Professional Certificate on Coursera
              </a>
              . It has been very fun and extremely educational for me as a
              designer. I am halfway through course 5 of 7. I have been
              designing an app for a sandwich shop, from paper wireframes to a
              finished product, including UX research with real users. When the
              project is completed, there will be an entire slide deck of it
              here, showing every stage of the design process, but for now, feel
              free to interact with my prototype I made in Figma.
            </p>
            <p className="my-4">
              <a
                target="_blank"
                href="https://www.figma.com/proto/dCpvMiEMaJPJiw4HYDNvwk/Portfolio-Wireframes-UPDATED-v3?type=design&node-id=109-408&t=LvdSYcdk0uc65ivK-1&scaling=scale-down&page-id=0%3A1&starting-point-node-id=109%3A408&mode=design"
              >
                Interact with the Figma Prototype
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
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Project4;
