import React from "react";
import Footer from "./Footer";
import { Navbar } from "./Navbar";

function Header({ children }) {
  return (
    <div>
      <Navbar />
      {/* {children} */}
    </div>
  );
}

export default Header;
