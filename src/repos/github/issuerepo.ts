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
}