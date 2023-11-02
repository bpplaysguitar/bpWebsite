import React from "react";

function Project({ projectItems }) {
  return (
    <div>
      {projectItems.map((projectItem) => (
        <div>
          {/* <!-- Project --> */}
          <div className="project-item active mb-5 border-bottom border-2">
            <div
              className="container d-flex flex-column mt-4"
              key={projectItem.id}
            >
              <div className="shadow border border-3 border-dark mb-3 rounded">
                <img
                  className="sr-only"
                  alt="screenshot of design project"
                  src="/src/assets/images/glitchbpopacity78.jpg"
                />
                <div className={projectItem.backgroundImg}></div>
              </div>
            </div>
            <div className="d-flex flex-column">
              <h2 className="mx-3 m-2 mt-3">{projectItem.name}</h2>
              <p className="px-3">{projectItem.description}</p>
              <p className="mb-5">
                {/* Link Button */}
                <a
                  className="btn btn-lg btn-dark text-white mx-3"
                  rel="noreferrer"
                  // href={projectItem.link}
                  href="#"
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
