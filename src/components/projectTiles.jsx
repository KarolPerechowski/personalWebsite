import React from "react";
import TechnologyPanel from "./technologyPanel.jsx";
import projects from "../models/projects.json";
import { BiTimeFive } from "react-icons/bi";

function ProjectTile({ project }) {
  return (
    <div>
      <h1 className="text-react-blue font-semibold">{project.name}</h1>
      <div>{project.description}</div>
      <span>
        <BiTimeFive></BiTimeFive>
        {project.duration}
      </span>
    </div>
  );
}

const findProject = (name) => {
  return projects.find((project) => project.name == name);
};

export default function ProjectsTiles() {
  return (
    <div className="break-words border-solid border-2 border-theme-blue-2 rounded-lg bg-theme-blue-3 p-10 hover:opacity-90 hover:shadow-none shadow-theme-blue-2 shadow-md">
      <div>
        <ProjectTile project={findProject("Insurance company")}></ProjectTile>
        <TechnologyPanel
          project={findProject("Insurance company")}
        ></TechnologyPanel>
      </div>
      <div className="mt-5">
        <ProjectTile project={findProject("Automation tool")}></ProjectTile>
        <TechnologyPanel
          project={findProject("Automation tool")}
        ></TechnologyPanel>
      </div>
    </div>
  );
}
