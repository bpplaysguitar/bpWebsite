import React from 'react';
import Project from './Project';


const projectItems = [
  {
    id: 1,
    name: "Marketing Campaign Landing Page for Surgical Devices",
    description: "This is a landing page with information about a surgical incision management device, as well as a form for users to fill out and submit to connect with a sales representative. The main goal of this page was to get form submissions from users, so we needed to provide helpful information, good user experiences on all devices, and make sure users were drawn to the form. View the project for more details.",
    link: "#",
    backgroundImg:"project-image1"
  },
  {
    id: 2,
    name: "Informational Home Page for Surgical Specialists",
    description: "This page serves as a central hub for information about a surgical incision management device and its uses in various specialties. The intended users of the page are surgeons who specialize in one or multiple types of surgery. The pre-configured corporate layout options presented challenges when desiring a good user experience on all device sizes, so I had to do some outside-the-box thinking to avoid a compromise, regardless of mobile or desktop browsing. View the project for more details.",
    link: "#",
    backgroundImg:"project-image2"
  },
  {
    id: 3,
    name: "Mobile-First Design and Accessibility Improvements for Investment Websites",
    description: "While making content updates to a company's Wordpress sites, I addressed issues I found with responsiveness, as well as presenting vital product information via text in images, which would have posed a problem for any potential clients using screen readers.",
    link: "#",
    backgroundImg:"project-image3"
  },

];

function Portfolio() {
  return (
    <div>
      <section className="container my-5">
      <h2 className="container pb-2 border-bottom" id="portfolio">Portfolio</h2>
      {/* <h5 className="container mt-3">UX Design</h5> */}
    <Project projectItems={projectItems} />
    </section>
    </div>
  );
}

export default Portfolio;
