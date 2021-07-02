import { Comment, ICommentRepo } from "../../core/entities/comment";
import axios, { AxiosRequestConfig } from "axios"

export class GitlabCommentRepo implements ICommentRepo {
    baseUrl: string
    config: AxiosRequestConfig

    constructor(baseUrl: string, authToken: string) {
        this.baseUrl = baseUrl
        this.config = {
            headers: { 
                "Authorization": `Bearer ${authToken}`
            }
        }
    }

    async getComments(issueId: number): Promise<Comment[]> {
        try {
            const resp = await axios.get(`${this.baseUrl}/issues/${issueId}/notes`, this.config)
            const { data } = resp
    
            const comments = data.map((json: any) => {
                return {
                    id: json.id
                    , body: json.body
                    , createdAt: json.created_at
                    , updatedAt: json.updated_at
                    , author: {
                        id: json.author.id
                        , userName: json.author.username
                    }
                }
            })
    
            return comments
        } catch (err) {
            return new Promise((_, reject) => {
                reject("Oops! Could not retrieve comments.")
            })
        }
    }

    async createComment(issueId: number, body: string): Promise<Comment> {
        try {
            const resp = await axios.post(`${this.baseUrl}/issues/${issueId}/notes`, { body }, this.config)
            const { data } = resp
    
            const comment = {
                id: data.id
                , body: data.body
                , createdAt: data.created_at
                , updatedAt: data.updated_at
                , author: {
                    id: data.author.id
                    , userName: data.author.username
                }
            }
    
            return comment
        } catch (err) {
            return new Promise((_, reject) => {
                reject("Oops! Could not create comments.")
            })
        }
    }

    async deleteComment(issueId: number, id: number): Promise<boolean> {
        try {
            await axios.delete(`${this.baseUrl}/issues/${issueId}/notes/${id}`, this.config)
            return true
        } catch (err) {
            return new Promise((_, reject) => {
                reject("Oops! Could not delete comment.")
            })
        }
    }
}