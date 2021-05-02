export class Comment {
    id: number
    body: string

    constructor(id: number, body: string) {
        this.id = id
        this.body = body
    }
}

export interface ICommentRepo {
    getComments(issueId: number): Comment[]
}