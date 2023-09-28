import React, { useState } from 'react';
import Navbar from './Navbar';
import About from './About';
import Portfolio from './Portfolio';
import Resume from './Resume';
import Project1 from './Project1';
import Project2 from './Project2';
import Project3 from './Project3';


function Header() {
const [currentPage, setCurrentPage] = useState('About');

// TODO: Add a comment describing the functionality of this method
const renderPage = () => {
  if (currentPage === 'Portfolio') {
    return <Portfolio />;
  }
  if (currentPage === 'Resume') {
    return <Resume />;
  }
  if (currentPage === 'Project1') {
    return <Project1 />;
  } 
  if (currentPage === 'Project2') {
    return <Project2 />;
  } 
  if (currentPage === 'Project3') {
    return <Project3 />;
  } else {
    return <About />
  }
};

const handlePageChange = (page) => setCurrentPage(page);
 
  return (
    <div>
    <Navbar currentPage={currentPage} handlePageChange={handlePageChange} />
      {renderPage()}
      </div>
  );
}

export default Header;