import { Project, IProjectRepo } from "../../core/entities/project"

export class LocalStroageProjectRepo implements IProjectRepo {
    getProjects(): Project[] {
        const projectsStr = localStorage.getItem("projects")

        if (!projectsStr) {
            return []
        }

        return JSON.parse(projectsStr)
    }

    createProject(project: Project): Project {
        localStorage.setItem("projects", JSON.stringify([...this.getProjects(), project]))
        return project
    }
}