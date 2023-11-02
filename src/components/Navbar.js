import React from "react";
// import { Navbar } from "react-bootstrap";
import { Link } from "react-router-dom";
import { Paths } from "../assets/config/Paths";

export const Navbar = () => {
  const pathsToCheck = [
    Paths.PORTFOLIO,
    Paths.PROJECT1,
    Paths.PROJECT2,
    Paths.PROJECT3,
    Paths.RESUME,
  ];

  // remove projects and add portfolio when working
  const links = [
    {
      name: "About Me",
      path: Paths.ABOUT,
    },
    // {
    //   name: "Portfolio",
    //   path: Paths.PORTFOLIO,
    // },
    {
      name: "Resume",
      path: Paths.RESUME,
    },
    {
      name: "Project 1",
      path: Paths.PROJECT1,
    },
    {
      name: "Project 2",
      path: Paths.PROJECT2,
    },
    {
      name: "Project 3",
      path: Paths.PROJECT3,
    },
  ];

  const loc = window.location.href;

  return (
    <nav className="navbar navbar-expand-md navbar-dark">
      <div className="container-fluid">
        <Link to={Paths.HOME} className="navbar-brand ms-3" id="navLogo">
          <span
            id="navLogoInitials"
            className="rounded-circle border border-1 border-white px-2 py-0"
          >
            BP
          </span>
          <span id="navLogoName" className="mx-3">
            Brian Palay
          </span>
        </Link>

        <button
          className="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarNav"
          aria-controls="navbarNav"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span className="navbar-toggler-icon"></span>
        </button>
        <div
          className="collapse navbar-collapse ms-5"
          id="navbarNav"
          data-toggle="collapse"
          data-target=".navbar-collapse"
        >
          <ul className="navbar-nav h6">
            {links.map((link, index) => (
              <li key={index} className="nav-item">
                <Link
                  to={link.path}
                  className={`nav-link ${
                    loc.includes(link.path) ||
                    (link.path === Paths.ABOUT &&
                      !pathsToCheck.some((path) => loc.includes(path)))
                      ? "active"
                      : ""
                  } ms-4 ps-3`}
                >
                  {link.name}
                </Link>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </nav>
  );
};
