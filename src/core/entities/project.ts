export class Project {
    baseUrl: string
    authToken: string
    schema: string

    constructor(baseUrl: string, authToken: string, schema: string = "github") {
        this.baseUrl = baseUrl
        this.authToken = authToken
        this.schema = schema
    }
}

export interface IProjectRepo {
    getProjects(): Project[]
}