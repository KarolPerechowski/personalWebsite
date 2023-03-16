import React from "react";

function technologyPanel({ project }) {
  return (
    <div className="flex mt-3 text-react-blue bg-theme-background justify-evenly rounded-lg p-10 shadow-theme-blue-2 shadow-md">
      {project.technology.map((proj) => {
        return (
          <div>
            <div>{proj}</div>
            <img className="w-10 h-10 mr-10" src={`/${proj}.png`} />
          </div>
        );
      })}
    </div>
  );
}

export default technologyPanel;
