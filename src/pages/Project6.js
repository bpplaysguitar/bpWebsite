import React from "react";
import dumpBin from "../assets/images/dump-bin.jpg";
import gridwallDisplay from "../assets/images/gridwall-display.jpg";
import displayCaseLight from "../assets/images/display-case-light.jpg";
import displayCaseDark from "../assets/images/display-case-dark.jpg";
import slatwallDisplay from "../assets/images/slatwall-display.jpg";
import pipeNestingTables from "../assets/images/pipe-nesting-tables.jpg";
import { Layout } from "../components/Layout";

function Project6() {
  return (
    <Layout>
      <main className="container">
        <h2 className="container pb-2 pt-4 border-bottom" id="project6">
          3D Modeling and Rendering
        </h2>

        <section className="text-center">
          <section id="resume-page-main"></section>
        </section>
        <div className="container my-4" id="">
          <div className="col">
            <p>
              The following are examples of 3D modeling and rendering work for
              the retail store fixtures industry.
            </p>

            <img
              className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded"
              alt="Maple laminate display cases with built-in lighting in a light room"
              src={displayCaseLight}
            />
            <p className="text-center mb-5">Display Cases</p>
            <img
              className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded"
              alt="Maple laminate display cases with built-in lighting in a dark room"
              src={displayCaseDark}
            />
            <p className="text-center mb-5">Display Cases</p>
            <img
              className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded"
              alt="Gridwall display consisting of panels and connectors, holding art canvases and vases"
              src={gridwallDisplay}
            />
            <p className="text-center mb-5">Gridwall Display</p>
            <img
              className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded"
              alt="Black metal wire dump bin"
              src={dumpBin}
            />
            <p className="text-center mb-5">Wire Dump Bin</p>

            <img
              className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded"
              alt="Gray woodgrain laminate slatwall floor display"
              src={slatwallDisplay}
            />
            <p className="text-center mb-5">Slawtall Display</p>
            <img
              className="d-block mx-auto img-fluid shadow border border-3 border-dark mb-3 rounded"
              alt="Nesting display tables made from black metal pipe pieces and woodgrain laminate table top"
              src={pipeNestingTables}
            />
            <p className="text-center mb-5">Pipe Nesting Tables</p>
          </div>
        </div>
      </main>
    </Layout>
  );
}

export default Project6;
