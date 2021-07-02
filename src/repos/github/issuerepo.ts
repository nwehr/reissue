import { Issue, IIssueRepo } from "../../core/entities/issue";
import axios, { AxiosRequestConfig } from "axios"

export class GithubIssueRepo implements IIssueRepo {
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

    async getIssues(): Promise<Issue[]> {
        try {
            const resp = await axios.get(`${this.baseUrl}/issues`, this.config)
            const { data } = resp

            const issues = data.map((json: any) => {
                return {
                    id: json.number
                    , state: json.state
                    , title: json.title
                    , body: json.body
                    , comments: json.comments
                }
            })

            return issues.filter((issue: Issue) => issue.state === "open")
        } catch (err) {
            return new Promise((_, reject) => {
                reject("Oops! Could not retrieve issues.")
            })
        }

    }

    async createIssue(title: string, body: string): Promise<Issue> {
        try {
            const resp = await axios.post(`${this.baseUrl}/issues`, { title, body }, this.config)
            const { data } = resp

            const issue = {
                id: data.number
                , state: data.state
                , title: data.title
                , body: data.body
                , comments: data.comments
            }

            return issue
        } catch (err) {
            return new Promise((_, reject) => {
                reject("Oops! Could not create an issues.")
            })
        }
    }

    async closeIssue(id: number): Promise<boolean> {
        try {
            await axios.patch(`${this.baseUrl}/issues/${id}`, { state: "closed" }, this.config)
            return true
        } catch (err) {
            return new Promise((_, reject) => {
                reject("Oops! Could not close an issues.")
            })
        }
    }
}