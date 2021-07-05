import { AuthToken } from "./authtoken";

export interface Project {
    name: string
    baseUrl: string
    authToken: AuthToken | string
    schema: string
}

export interface IProjectRepo {
    getProjects(): Project[]
    createProject(project: Project): Project
}