import { Nav } from "react-bootstrap"
import { BsArrowDown } from "react-icons/bs"
import { Project } from "../../core/entities/project"
import { withIcon } from "./withIcon"
import ProjectModal from "./ProjectModal"
import { useProjects } from "./hooks/projects"

const ProjectList = () => {
    const { projects, selectedProject, selectProject, createProject } = useProjects()

    return <>
        <Nav className="flex-column">
            {
                projects.length
                    ? projects.map((project: Project) => {
                        const active = selectedProject ? selectedProject.name === project.name : false

                        return <Nav.Link key={project.name} active={active} onClick={selectProject(project.name)}>
                            {withIcon(project.name, project.schema)}
                        </Nav.Link>
                    })
                    : <div style={{ textAlign: "center", margin: "1em" }}>
                        <span style={{ color: "gray" }}>Add your first project.</span>
                        <div>
                            <BsArrowDown size="1.5em" color="gray" style={{ marginTop: "1.5em" }} />
                        </div>
                    </div>
            }
        </Nav>

        <ProjectModal onSubmitNewProject={createProject} />
    </>
}

export default ProjectList