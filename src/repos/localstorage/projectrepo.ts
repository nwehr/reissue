import { Project, IProjectRepo } from "../../core/entities/project"

export class LocalStroageProjectRepo implements IProjectRepo {
    getProjects(): Project[] {
        const projectsStr = localStorage.getItem("projects")

        if (!projectsStr) {
            return []
        }

        return JSON.parse(projectsStr)
    }

    createProject(name: string, baseUrl: string, authToken: string, schema: string = "github"): Project {
        const project = { name, baseUrl, authToken, schema }
        localStorage.setItem("projects", JSON.stringify([...this.getProjects(), project]))
        return project
    }
}