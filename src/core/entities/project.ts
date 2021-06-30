export class Project {
    name: string
    baseUrl: string
    authToken: string
    schema: string

    constructor(name: string, baseUrl: string, authToken: string, schema: string = "github") {
        this.name = name
        this.baseUrl = baseUrl
        this.authToken = authToken
        this.schema = schema
    }
}

export interface IProjectRepo {
    getProjects(): Project[]
    createProject(name: string, baseUrl: string, authToken: string, schema: string): Project
}