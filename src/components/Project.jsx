export default function Project({ selectedProject }) {
    return (
        <>
            {selectedProject ? (
                <div id="project">
                    <div className="project-header">
                        <div>
                            <button>x</button>
                            <button>-</button>
                        </div>
                        <h1>Project title</h1>
                    </div>
                    <div className="project-body">
                        <p>description</p>
                    </div>
                </div>
            ) : (
                <p className="null">Create a project</p>
            )}
        </>
    );
}
