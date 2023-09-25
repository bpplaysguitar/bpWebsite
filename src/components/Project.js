import React from "react";

// Whenever we try to render an array containing JSX, React knows to render each JSX element separately
function Project(props) {

  return (
    <div>
      {props.projectItems.map((projectItems) => (
        <div>
            {/* <!-- Project --> */}
            <div className="project-item active mb-5 border-bottom border-2">
              <div
                className="container d-flex flex-column mt-4"
                key={projectItems.id}
              >
                <div className="shadow border border-3 border-dark mb-3 rounded">
                <img class="sr-only" alt="screenshot of design project" src="/src/assets/images/glitchbpopacity78.jpg"/>
                  <div className={projectItems.backgroundImg}></div>
                </div>
              </div>
              <div className="d-flex flex-column">
                <h2 className="mx-3 m-2 mt-3" >{projectItems.name}</h2>
                <p className="px-3">{projectItems.description}</p>
                <p className="mb-5">
                  {/* Link Buttons */}
                  {/* <a
                    className="btn btn-lg btn-dark text-white mx-1"
                    target="_blank"
                    rel="noreferrer"
                    href={projectItems.deployedDemoLink}
                  >
                    {projectItems.deployedDemoBtnText}
                  </a> */}
                  <a
                    className="btn btn-lg btn-dark text-white mx-3"
                    target="_blank"
                    rel="noreferrer"
                    href={projectItems.link}
                  >
                    View Project (coming soon...)
                  </a>
                </p>
              </div>
            </div>
          </div>
      ))}
    </div>
  );
}

export default Project;