import "./App.css";
import FirstSection from "./components/firstSection.jsx";
import ProjectsTiles from "./components/projectTiles.jsx";
import ProjectTile from "./components/projectTiles.jsx";
import projects from "./models/projects";

function App() {
  const projectTiles = projects.map((project) => {
    <ProjectTile props={project}></ProjectTile>;
  });
  return (
    <div>
      <div className="flex justify-center content items-center h-screen">
        <FirstSection></FirstSection>
      </div>
      <div className="flex justify-center content items-center h-screen">
        <ProjectsTiles></ProjectsTiles>
      </div>
    </div>
  );
}

export default App;
