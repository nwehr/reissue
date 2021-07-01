import { Project, IProjectRepo } from "../core/entities/project"

export class MemProjectRepo implements IProjectRepo {
    projects: Project[] = [
        {
            name: ""
            , baseUrl: "http://someendpoint"
            , authToken: "abc123"
            , schema: "github"
        }
        , {
            name: ""
            , baseUrl: "http://anotherendpoint"
            , authToken: "123abc"
            , schema: "gitlab"
        }
    ]

    getProjects(): Project[] {
        return this.projects
    }

    createProject(project: Project): Project {
        this.projects.push(project)
        return project
    }
}