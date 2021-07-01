// 

import { User } from "./user"

export interface Comment {
    id: number
    body: string
    createdAt: string
    updatedAt: string

    author: User
}

export interface ICommentRepo {
    getComments(issueId: number): Promise<Comment[]>
    createComment(issueId: number, body: string): Promise<Comment>
}