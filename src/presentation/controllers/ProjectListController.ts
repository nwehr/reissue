
import store from "../../state/store"
import { setSelectedProject, setNumProjects } from "../../state/actions"
import { Project, IProjectRepo } from "../../core/entities/project"

export class ProjectListController {
    repo: IProjectRepo
    
    constructor(repo: IProjectRepo) {
        this.repo = repo
    }

    getProjects(): Project[] {
        const projects = this.repo.getProjects()
        store.dispatch(setNumProjects(projects.length))
        return projects
    }

    createProject(project: Project): Project {
        return this.repo.createProject(project)
    }

    getSelectedProject(): Project | null {
        return store.getState().selectedProject
    }

    selectProject(name: string): Project | null {
        const projects = this.getProjects()

        for (let project of projects) {
            if (project.name === name) {
                store.dispatch(setSelectedProject(project))
                return project
            }
        }

        return null
    }
}