export interface Project {
    name: string
    baseUrl: string
    authToken: string
    schema: string
}

export interface IProjectRepo {
    getProjects(): Project[]
    createProject(project: Project): Project
}