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
        const result = await axios.get(this.baseUrl + "/issues", { headers: { "Authorization": "Bearer " + this.authToken } })

        return result.data.map((json: any) => {
            const { number, state, title, body } = json
            return { id: number, state, title, body }
        })
    }

    async createIssue(title: string): Promise<Issue> {
        const result = await axios.post(this.baseUrl + "/issues", { title }, { headers: { "Authorization": "Bearer " + this.authToken } })
        const { number, state, body } = result.data
        return { id: number, state, title: result.data.title, body }
    }
}