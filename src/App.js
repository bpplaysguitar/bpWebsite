import React from "react";
import { Route, Routes } from "react-router-dom";
import { Paths } from "./assets/config/Paths";
import About from "./pages/About";
import Portfolio from "./pages/Portfolio";
import Project1 from "./pages/Project1";
import Project2 from "./pages/Project2";
import Project3 from "./pages/Project3";
import Resume from "./pages/Resume";

export const App = () => {
  const renderRoutes = () => {
    return (
      <>
        <Route path={Paths.HOME} element={<About />} />
        <Route path={Paths.ABOUT} element={<About />} />
        <Route path={Paths.RESUME} element={<Resume />} />
        <Route path={Paths.PROJECT1} element={<Project1 />} />
        <Route path={Paths.PROJECT2} element={<Project2 />} />
        <Route path={Paths.PROJECT3} element={<Project3 />} />
        <Route path={Paths.PORTFOLIO} element={<Portfolio />} />
      </>
    );
  };

  return (
    <div>
      <Routes>{renderRoutes()}</Routes>
    </div>
  );
};
