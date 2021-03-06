export interface Issue {
    id: number
    state: string
    title: string
    body: string
    comments: number | null
}

export interface IIssueRepo {
    getIssues(): Promise<Issue[]>
    createIssue(title: string, body: string): Promise<Issue>
    closeIssue(id: number): Promise<boolean>
}