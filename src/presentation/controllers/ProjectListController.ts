
import store from "../../state/store"
import { setSelectedProject } from "../../state/actions"
import { Project, IProjectRepo } from "../../core/entities/project"

export class ProjectListController {
    repo: IProjectRepo
    
    constructor(repo: IProjectRepo) {
        this.repo = repo
    }

    getProjects(): Project[] {
        return this.repo.getProjects()
    }

    createProject(name: string, baseUrl: string, authToken: string, schema: string = "github"): Project {
        return this.repo.createProject(name, baseUrl, authToken, schema)
    }

    getSelectedProject(): Project | null {
        return store.getState().selectedProject
    }

    selectProject(name: string): Project | null {
        const projects = this.getProjects()

        for (let project of projects) {
            if (project.name == name) {
                store.dispatch(setSelectedProject(project))
                return project
            }
        }

        return null
    }
}