import React from "react";
import TechnologyPanel from "./technologyPanel.jsx";
import projects from "../models/projects.json";
import { BiTimeFive } from "react-icons/bi";

function ProjectTile({ project }) {
  return (
    <div>
      <h1 className="text-red-700 font-semibold">{project.name}</h1>
      <div>{project.description}</div>
      <div className="flex">
        <BiTimeFive className="mt-1"></BiTimeFive>
        <div className="ml-2 mb-2">{project.duration}</div>
      </div>
    </div>
  );
}

const findProject = (name) => {
  return projects.find((project) => project.name == name);
};

export default function ProfessionalProjectsTiles() {
  return (
    <div className="border-solid border-2 border-neon-3 rounded-lg bg-neon-4 p-10 hover:shadow-none shadow-theme-blue-2 shadow-md">
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
