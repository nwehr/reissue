import { Issue, IIssueRepo } from "../../core/entities/issue";
import axios from "axios"

export class GitlabIssueRepo implements IIssueRepo {
    baseUrl: string
    authToken: string

    constructor(baseUrl: string, authToken: string) {
        this.baseUrl = baseUrl
        this.authToken = authToken
    }

    async getIssues(): Promise<Issue[]> {
        try {
            const resp = await axios.get(this.baseUrl + "/issues", { headers: { "Authorization": "Bearer " + this.authToken } })

            return resp.data.map((json: any) => {
                const { id, state, title, body } = json
                return { id, state, title, body, comments: 0 }
            })
        } catch (err) {
            return new Promise((resolve, reject) => {
                reject("Oops! Could not retrieve your issues.")
            })
        }
    }

    async createIssue(title: string): Promise<Issue> {
        try {
            const result = await axios.post(this.baseUrl + "/issues", { title }, { headers: { "Authorization": "Bearer " + this.authToken } })
            const { id, state, body } = result.data
            return { id, state, title: result.data.title, body, comments: 0 }
        } catch(err) {
            return new Promise((resolve, reject) => {
                reject("Oops! Could not create an issues.")
            })
        }
    }
}