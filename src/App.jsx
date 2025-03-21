import PopUp from './components/PopUp'
import Project from './components/Project';
import Sidebar from './components/Sidebar';
import './index.css'
import { useState } from 'react'

function App() {
  const [creating, setCreating] = useState(false);
  const [projects, setProjects] = useState([]);

  const [selectedProject, setSelectedProject] = useState(null);

  function handleCreate(project) {
    if (project === "create") {
      setCreating(true);
    } else if (project === "created") {
      setCreating(false);
    } else {
      setProjects([...projects, project]);
      setCreating(false);
    }
  }

  function handleProject(title) {
    const project = projects.find(proj => proj.title === title);
    setSelectedProject(project);
  }

  return (
    <>
    <Sidebar projects={projects} handleProject={handleProject} />
    <div id="main">
      <div id='header'>
        <div className='heading'>
          <h3>Project Manager</h3>
        </div>
        <div className='buttonDiv'>
          <button className='darkButton' onClick={() => handleCreate("create")}>
            Create Project
          </button>
        </div>
      </div>

      {creating ? (
        <PopUp handleCreate={handleCreate} />
      ) : <Project selectedProject={selectedProject} />}
    </div>
    </>
  );
}

export default App;