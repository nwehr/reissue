import { useState } from "react"
import { Project } from "../../../core/entities/project"
import { ProjectListController } from "../../controllers/ProjectListController"
import { LocalStroageProjectRepo } from "../../../repos/localstorage/projectrepo"

const defaultController = new ProjectListController(new LocalStroageProjectRepo())

export const useProjects = (controller: ProjectListController = defaultController) => {
    const [projects, setProjects] = useState<Project[]>(controller.getProjects())
    const [selectedProject, setSelectedProject] = useState<Project | null>(controller.getSelectedProject())

    const createProject = (project: Project) => {
        controller.createProject(project)
        setProjects(controller.getProjects())
    }

    const selectProject = (name: string) => () => {
        setSelectedProject(controller.selectProject(name))
    }

    return {
        projects
        , selectedProject
        , createProject
        , selectProject
    }
}