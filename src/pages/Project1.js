import React from "react";
import eloquaTemplateDesktop from "../assets/images/Eloqua-Template.jpg";
import prevenaDemoDesktop from "../assets/images/Prevena-Demo-Desktop.png";
import eloquaTemplateMobile from "../assets/images/Eloqua-Mobile.png";
import prevenaDemoMobile from "../assets/images/Prevena-Demo-Mobile.jpg";
import prevenaArrowDesktop from "../assets/images/Prevena-Demo-Desktop-arrow.jpg";
import prevenaArrowMobile from "../assets/images/Prevena-Demo-Mobile-arrow.jpg";
import { Layout } from "../components/Layout";
import { Paths } from "../assets/config/Paths";

function Project1() {
  return (
    <Layout>
      <main className="container">
        <h2 className="container pb-2 pt-4 border-bottom" id="project1">
          Marketing Campaign Landing Page for Surgical Devices
        </h2>

        <section className="text-center">
          <section id="resume-page-main"></section>
        </section>
        <div className="container my-4" id="downloadPDF">
          <div className="col">
            <p>
              The stakeholders for this project, my team's marketing
              strategists, use landing pages for marketing campaigns for our
              surgical incision management devices, which are designed to help
              patients recover from surgery. The goal of the landing pages is to
              generate sales leads by getting users to fill out forms on the
              page and provide us with their contact info, the type of work they
              do, and type of product they need.
            </p>
            <p>
              These landing pages, which live at a separate domain from our main
              website, are typically built by a marketing automation specialist
              (not a UX designer), using pre-fabricated templates for the
              content provided by the marketing strategists. The templates are
              simple, usually consisting of a hero image with text at the top, a
              single image in the main body, some areas for text, and a contact
              form, seen in the following screenshot.
            </p>
            <img
              className="desktop-only mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded"
              alt="Screenshot of standard corporate landing page template, showing basic design"
              src={eloquaTemplateDesktop}
            />
            <img
              className="mobile-only mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded"
              alt="Screenshot of standard corporate landing page template, showing basic design"
              src={eloquaTemplateMobile}
            />
            <p>
              The marketing strategists were becoming frustrated with the lack
              of customizability and unexciting visuals of their campaign
              landing pages, so they came to me for help due to one important
              fact: I know how to code. In addtion to the templates, a built-in
              code editor could be used to build from scratch, and they wanted
              my help to make the pages more interesting, and hopefully create
              more effective marketing campaigns. So for these pages, I worked
              as both a UX designer and a front-end developer.
            </p>
            <p>
              The following page is one example of this type of work I did. The
              marketing strategists and I had meetings to discuss content and
              iterate layouts that would allow them to include everything they
              needed. I incorporated many elements from our main website's
              design library, which allowed us to add more image and video
              content while keeping things on-brand. Additionally, I felt the
              white form got lost on the white page, so since form submissions
              are the goal of these landing pages, I gave the form a light gray
              background to make it stand out and look more polished. The next
              screenshot is my design.
            </p>

            <img
              className="desktop-only mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded"
              alt="Screenshot of new landing page, customized with more image content and more interesting layout"
              src={prevenaDemoDesktop}
            />

            <img
              className="mobile-only mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded"
              alt="Screenshot of new landing page, customized with more image content and more interesting layout"
              src={prevenaDemoMobile}
            />

            <p>
              Next is a screenshot near the beginning of the page, where the
              user is met with lots of information to take in, and likely not
              thinking about the form at the bottom of the page that will help
              them get in touch, and help the marketers get an important sales
              lead. We came up with a solution that consists of a JavaScript
              "Contact a Rep" button (marked in the screenshot by a red arrow)
              that stays in a fixed position on the screen as the user scrolls,
              and it links to the form. I gave the mobile and desktop
              experiences their own button styles and placements, such that the
              button is noticeable, but not in the way - as if to consistently
              but politely remind the user of the task to complete.
            </p>

            <img
              className="desktop-only mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded"
              alt="Closeup detail of JavaScript button on landing page"
              src={prevenaArrowDesktop}
            />
            <img
              className="mobile-only mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded"
              alt="Closeup detail of purple JavaScript button on landing page"
              src={prevenaArrowMobile}
            />
            <p>
              Improvements like this became standard on my team - and within a
              large corporateion, unique to my team - and for susequest landing
              pages, the marketing strategists had me impliment similar designs
              and features to improve their campaigns.
            </p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Project1;
