import { Comment, ICommentRepo } from "../../core/entities/comment";
import axios, { AxiosRequestConfig } from "axios"

export class GithubCommentRepo implements ICommentRepo {
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
            const resp = await axios.get(`${this.baseUrl}/issues/${issueId}/comments`, this.config)
            const { data } = resp

            const comments = data.map((json: any) => {
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

            return comments

        } catch (err) {
            return new Promise((_, reject) => {
                reject("Oops! Could not retrieve comments.")
            })
        }
    }

    async createComment(issueId: number, body: string): Promise<Comment> {
        try {
            const result = await axios.post(`${this.baseUrl}/issues/${issueId}/comments`, { body }, this.config)
            const { data } = result

            const comment = {
                id: data.id
                , body: data.body
                , createdAt: data.created_at
                , updatedAt: data.updated_at
                , author: {
                    id: data.user.id
                    , userName: data.user.login
                }
            }

            return comment
        } catch (err) {
            return new Promise((_, reject) => {
                reject("Oops! Could not create comment.")
            })
        }
    }

    async deleteComment(issueId: number, id: number): Promise<boolean> {
        try {
            await axios.delete(`${this.baseUrl}/issues/comments/${id}`, this.config)
            return true
        } catch (err) {
            return new Promise((_, reject) => {
                reject("Oops! Could not delete comment.")
            })
        }
    }
}