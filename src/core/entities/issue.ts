export class Issue {
    id: number
    state: string
    title: string
    body: string

    constructor(id: number, state: string, title: string, body: string) {
        this.id = id
        this.state = state
        this.title = title
        this.body = body
    }
}

export interface IIssueRepo {
    getIssues(): Promise<Issue[]>
    createIssue(title: string): Promise<Issue>
}