import "./App.css";
import FirstSection from "./components/firstSection.jsx";
import ProfessionalProjects from "./components/professionalProjects.jsx";

function App() {
  return (
    <div className="flex flex-col items-center">
      <div className="h-screen min-w-[320px] p-10">
        <FirstSection></FirstSection>
      </div>
      <div className="h-screen min-w-[320px] p-10">
        <ProfessionalProjects></ProfessionalProjects>
      </div>
    </div>
  );
}

export default App;
