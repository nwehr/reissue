import { useState } from "react"
import { Nav } from "react-bootstrap"
import { BsArrowDown } from "react-icons/bs"
import { Project } from "../../core/entities/project"
import { ProjectListController } from "../controllers/ProjectListController"
import ProjectIcon from "./ProjectIcon"
import ProjectModal from "./ProjectModal"

export interface ProjectListProps {
    controller: ProjectListController
}

const ProjectList = (props: ProjectListProps) => {
    const { controller } = props

    const [projects, setProjects] = useState<Project[]>(controller.getProjects())
    const [selectedProject, setSelectedProject] = useState<Project | null>(controller.getSelectedProject())

    const handleCreateProject = (project: Project) => {
        controller.createProject(project)
        setProjects(controller.getProjects())
    }

    const handleSelectProject = (name: string) => () => {
        setSelectedProject(controller.selectProject(name))
    }

    return <>
        <Nav className="flex-column">
            {
                projects.length
                    ? projects.map((project: Project) => {
                        const active = selectedProject ? selectedProject.name === project.name : false

                        return <Nav.Link key={project.name} active={active} onClick={handleSelectProject(project.name)}>
                            <ProjectIcon schema={project.schema} />{" "}{project.name}
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

        <ProjectModal onSubmitNewProject={handleCreateProject} />
    </>
}



export default ProjectList