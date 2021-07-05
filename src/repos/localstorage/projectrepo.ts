import { Project, IProjectRepo } from "../../core/entities/project"

export class ProjectRepo implements IProjectRepo {
    getProjects(): Project[] {
        const projectsStr = localStorage.getItem("projects")

        if (!projectsStr) {
            return []
        }

        const projects: Project[] = JSON.parse(projectsStr)

        return projects
            .sort((a: Project, b: Project) => {
                return a.name < b.name ? -1 : 1
            })
    }

    createProject(project: Project): Project {
        localStorage.setItem("projects", JSON.stringify([...this.getProjects(), project]))
        return project
    }
}