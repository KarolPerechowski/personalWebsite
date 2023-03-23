import React from "react";

function technologyPanel({ project }) {
  return (
    <div className="flex flex-wrap text-red-700 bg-neon-3 rounded-lg p-10 shadow-neon-4 shadow-md">
      {project.technology.map((proj) => {
        return (
          <div className="border-solid border-2 p-2 ml-2 mb-2 rounded-lg bg-neon-4 border-neon-1">
            <div>
              <div>{proj}</div>
              <img className="w-10 h-10 mr-10" src={`/${proj}.png`} />
            </div>
          </div>
        );
      })}
    </div>
  );
}

export default technologyPanel;
