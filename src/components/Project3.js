import React from 'react';
import hhrAboutBeforeDesktop from '../assets/images/hhr-about-before-desktop.png';
import iriComparisonChartBefore from '../assets/images/iri-comparison-chart-before-desktop.png';
import hhrAbout1400 from '../assets/images/hhr-about-1400.png';
import hhrAbout980 from '../assets/images/hhr-about-980.png';
import hhrAbout768 from '../assets/images/hhr-about-768.png';
import hhrAbout460 from '../assets/images/hhr-about-460.png';
import hhrBefore1400 from '../assets/images/hhr-before-1400.png';
import hhrBefore980 from '../assets/images/hhr-before-980.png';
import hhrBefore768 from '../assets/images/hhr-before-768.png';
import hhrBefore460 from '../assets/images/hhr-before-460.png';
import iriChart1200 from '../assets/images/iri-chart-1200.png';
import iriChart580 from '../assets/images/iri-chart-580.png';
import iriChart390 from '../assets/images/iri-chart-390.png';




function Project3() {
  return (
    <div>
      
  <main className="container">
  <h2 className="container pb-2 pt-4 border-bottom" id="project3">Mobile-First Design and Accessibility Improvements for Investment Websites</h2>
    
    
    <section className="text-center">
      <section id="resume-page-main">
        
      </section>
    </section>
    <div className="container my-4" id="downloadPDF">
    <div className="col">
    <p>
    I was hired to make ongoing content updates to two WordPress websites for an investment consulting company. While making these updates, I took note of some UX issues that needed improving. Two major red flags were images containing large amounts of vital information about the company and product, as text in the images. I knew this was bad for accessibility, so I needed to get that text to be actual text instead. Another problem with those images is they didn't work well when scaling to smaller screen widths. Note that the two pages being shown here are from two different websites within the company; I wouldn't want such different color palettes on the same website.
         </p>
         <h4 className="container pb-2 pt-4">Problem Images</h4>
         <p>
    This is the image that was live, serving as the "about" information for the company.
         </p>

         <img className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded" src={hhrAboutBeforeDesktop} />

         <p>
    This next image gave potential customers the data to help make a decision about the investment product.
         </p>
         <img className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded" src={iriComparisonChartBefore} />

         <p>
    Accessibility aside, these images are readable on desktop screens, though the first one is blurry at its original size. Viewing them on a mobile device, or reducing the desktop screen width quickly illustrates the need to come up with a solution for the mobile user experience.
         </p>


         <h4 className="container pb-2 pt-4">CSS to the Rescue</h4>
         <p>
    First, I found a WordPress pluging that allows for custom CSS styling. Then I replicated the visuals of the images, using HTML and CSS. This allowed me to control the responsive behavior of the content with media queries, and it allowed the text to be actual text for accessibility.
         </p>

         <p>
    Here are examples of the "about" page at four screen widths.
         </p>
    
    {/* <h4 className="container pb-2 pt-4">Plastic Surgery Specialty Page</h4> */}

      <img className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-0 rounded" src={hhrAbout1400} />
      <p className="mb-5">1400px</p>
      <img className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-0 rounded" src={hhrAbout980} />
      <p className="mb-5">980px</p>
      <img className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-0 rounded" src={hhrAbout768} />
      <p className="mb-5">768px</p>
      <img className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-0 rounded" src={hhrAbout460} />
      <p className="mb-5">460px</p>

      <img className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-0 rounded" src={iriChart1200} />
      <p className="mb-5">1200px</p>
      <img className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-0 rounded" src={iriChart580} />
      <p className="mb-5">580px</p>
      <img className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-0 rounded" src={iriChart390} />
      <p className="mb-5">390px</p>

      

           
    
      </div>
    </div>

</main>
    </div>
  );
}

export default Project3;
