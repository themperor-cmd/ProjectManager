import { useRef } from "react"

export default function PopUp({handleCreate}) {
    const title = useRef();
    const description = useRef();
    function createProject() {
        const project = {
            title: title.current.value,
            description: description.current.value
        };
        
        handleCreate(project);
    }
    return (
        <div id="popUp">
            <span>
                <label htmlFor="title">Project title:</label>
                <input ref={title} name='title' />
            </span>
            <span>
                <label htmlFor="description">Project description:</label>
                <textarea ref={description} className='description' name='description' />
            </span>
            <button className='darkButton' onClick={createProject}>Create</button>
        </div>
    )
}