import React from 'react';
import prevenaCentralHomeDesktop from '../assets/images/Prevena-Central-Home-Desktop.jpg';
import prevenaCentralHomeMobile from '../assets/images/Prevena-Central-Home-Mobile.jpg';
import prevenaCentralPlasticsDesktop from '../assets/images/Prevena-Central-Plastics-Desktop.jpg';
import prevenaCentralPlasticsMobile from '../assets/images/Prevena-Central-Plastics-Mobile.jpg';



function Project2() {
  return (
    <div>
      
  <main className="container">
  <h2 className="container pb-2 pt-4 border-bottom" id="project2">Informational Hub for Surgical Specialists</h2>
    
    
    <section className="text-center">
      <section id="resume-page-main">
        
      </section>
    </section>
    <div className="container my-4" id="downloadPDF">
    <div className="col">
    <p>
    This was a project working with my team's martketing strategists as stakeholders, who needed to create a centralized place where sugeons of various specialties could gain knowledge about how our products could help their patients. We also included ways to get in touch with a sales representative. The project consists of a home page and five specialty pages. Surgeons can view testimonials, brochures, application videos, and links to related pages. Here, we will focus on the home page and one specialty page as an example.</p>
    
    <p>During this project, mobile-first thinking became important, and that is the focus of this summary of the work. Our corporate UX templates were designed primarily around on desktop layouts, with each section of the page existing in a prefabricated desktop layout, as well as a corresponding mobile layout when viewed on mobile devices. During the iteration process, I noticed that some sections looked great in their desktop layout, but not so great in their mobile layouts, which would present a compromised user experience in mobile. And research showed that a majority of surgeons viewed our existing pages on mobile devices.
    </p>
     <p>
     To solve this, I remembered the CSS "display" property from my web development certification course. I knew if I was coding a page from scratch, I could show or hide elements, using "display: none," "display: initial," and media queries. When I asked the development team if we could do something like that, most had never done it on a project, but it turned out they could. So I created separate versions of some sections where needed, unique to the desktop and mobile experiences, assigning each to be considered the "desktop version" or "mobile version" of that section.</p>
     
     <p><strong>This is a good time to suggest viewing both versions of the screenshots throughout this entire portfolio, by either holding a mobile device vertically and horizontally, or changing the width of a desktop browser.</strong></p>
  <p>
     In the screenshots below, the blue notes on the wireframes let the development team know what to show/hide and when. One such place is on the home page, the section with the specialty icons. The desktop version provided just what we wanted, with large and clear icons to click, but in mobile, these icons took up so much vertical space, a user would need to scroll quite a bit just to get to the end of the specialty menu. So I found a different section from our design library, with much smaller icons, and I made that the mobile version of the specialty menu.
         </p>
         <h4 className="container pb-2 pt-4">Home Page</h4>
    <img className="desktop-only mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded" src={prevenaCentralHomeDesktop} alt="alt text"/>
    <img className="mobile-only mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded" src={prevenaCentralHomeMobile} />
    <h4 className="container pb-2 pt-4">Plastic Surgery Specialty Page</h4>
    
      <img className="desktop-only mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded" src={prevenaCentralPlasticsDesktop} />
     
      <img className="mobile-only mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded" src={prevenaCentralPlasticsMobile} />
      

           
    
      </div>
    </div>

</main>
    </div>
  );
}

export default Project2;
