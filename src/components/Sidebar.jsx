export default function Sidebar({projects, handleProject}) {
    return (
        <div id="sidebar">
            <h1>Projects</h1>
            <div id="projects">
                {projects.map((project, index) => (
                    <div onClick={() => handleProject(project.title)} className="sidebar-project" key={index}>
                        <p>{project.title}</p>
                    </div>
                ))}
            </div>
        </div>
    )
}