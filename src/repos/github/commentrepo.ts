import { Comment, ICommentRepo } from "../../core/entities/comment";
import axios from "axios"

export class GithubCommentRepo implements ICommentRepo {
    baseUrl: string
    authToken: string

    constructor(baseUrl: string, authToken: string) {
        this.baseUrl = baseUrl
        this.authToken = authToken
    }

    async getComments(issueId: number): Promise<Comment[]> {
        const result = await axios.get(this.baseUrl + `/issues/${issueId}/comments`, { headers: { "Authorization": "Bearer " + this.authToken } })
        return result.data.map((json: any) => {
            return {
                id: json.id
                , body: json.body
                , createdAt: json.created_at
                , updatedAt: json.updated_at
                , author: {
                    id: json.user.id
                    , userName: json.user.login
                }
            }
        })
    }

    async createComment(issueId: number, body: string): Promise<Comment> {
        const result = await axios.post(this.baseUrl + `/issues/${issueId}/comments`, { body }, { headers: { "Authorization": "Bearer " + this.authToken } })
        const json = result.data
        
        return {
            id: json.id
            , body: json.body
            , createdAt: json.created_at
            , updatedAt: json.updated_at
            , author: {
                id: json.user.id
                , userName: json.user.login
            }
        }
    }
}