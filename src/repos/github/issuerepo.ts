import { Issue, IIssueRepo } from "../../core/entities/issue";
import axios from "axios"

export class GithubIssueRepo implements IIssueRepo {
    baseUrl: string
    authToken: string

    constructor(baseUrl: string, authToken: string) {
        this.baseUrl = baseUrl
        this.authToken = authToken
    }

    async getIssues(): Promise<Issue[]> {
        try {
            const result = await axios.get(this.baseUrl + "/issues", { headers: { "Authorization": "Bearer " + this.authToken } })

            return result.data.map((json: any) => {
                const { number, state, title, body, comments } = json
                return { id: number, state, title, body, comments }
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
            const { number, state, body, comments } = result.data
            return { id: number, state, title: result.data.title, body, comments }
        } catch (err) {
            return new Promise((resolve, reject) => {
                reject("Oops! Could not create an issues.")
            })
        }
    }
}