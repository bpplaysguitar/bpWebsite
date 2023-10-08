import React from 'react';

function Navbar({ currentPage, handlePageChange }) {
  return (
    <div>
      <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid">
        {/* Logo */}
        <a className="navbar-brand ms-3" id="navLogo" href="/"><span id="navLogoInitials"
            className="rounded-circle border border-1 border-white px-2 py-0">BP</span><span id="navLogoName"
            className="mx-3">Brian Palay</span></a>
        <button className="navbar-toggler" type="button" data-bs-toggle="collapse" data-bs-target="#navbarNav"
          aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
          <span className="navbar-toggler-icon"></span>
        </button>
        <div className="collapse navbar-collapse ms-5" id="navbarNav" data-toggle="collapse" data-target=".navbar-collapse">
          <ul className="navbar-nav h6">
            {/* About */}
            <li className="nav-item">
              <a href="#aboutme" onClick={() => handlePageChange('About')} className={currentPage === 'About' ? 'nav-link active ms-4 ps-3' : 'nav-link ms-4 ps-3'}><i className="me-2 bi bi-person-fill"></i>About Me</a>
            </li>
            {/* Portfolio */}
            {/* to be unhid when working properly  */}
            {/* <li className="nav-item">
              <a href="#portfolio" onClick={() => handlePageChange('Portfolio')} className={currentPage === 'Portfolio' ? 'nav-link active ms-4 ps-3' : 'nav-link ms-4 ps-3'}><i className="me-2 bi bi-images"></i>Portfolio</a>
            </li> */}
            {/* Resume */}
            <li className="nav-item">
              <a href="#resume" onClick={() => handlePageChange('Resume')} className={currentPage === 'Resume' ? 'nav-link active ms-4 ps-3' : 'nav-link ms-4 ps-3'}><i className="me-2 bi bi-file-earmark-text-fill"></i>Resume</a>
            </li>
            {/* REMOVE PROJECTS FROM NAV */}
            {/* Project1 */}
            <li className="nav-item">
              <a href="#project1" onClick={() => handlePageChange('Project1')} className={currentPage === 'Project1' ? 'nav-link active ms-4 ps-3' : 'nav-link ms-4 ps-3'}><i className="bi bi-file-earmark-image"></i>Portfolio Project 1</a>
            </li>
            {/* Project2 */}
            <li className="nav-item">
              <a href="#project2" onClick={() => handlePageChange('Project2')} className={currentPage === 'Project2' ? 'nav-link active ms-4 ps-3' : 'nav-link ms-4 ps-3'}><i className="bi bi-file-earmark-image"></i>Portfolio Project 2</a>
            </li>
            {/* Project3 */}
            <li className="nav-item">
              <a href="#project3" onClick={() => handlePageChange('Project3')} className={currentPage === 'Project3' ? 'nav-link active ms-4 ps-3' : 'nav-link ms-4 ps-3'}><i className="bi bi-file-earmark-image"></i>Portfolio Project 3</a>
            </li>
          </ul>
        </div>
      </div>
    </nav>

    </div>
  );
}

export default Navbar;
