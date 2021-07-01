import { Issue, IIssueRepo } from "../../core/entities/issue";
import axios, { AxiosRequestConfig } from "axios"

export class GitlabIssueRepo implements IIssueRepo {
    baseUrl: string
    config: AxiosRequestConfig

    constructor(baseUrl: string, authToken: string) {
        this.baseUrl = baseUrl
        this.config = {
            headers: {
                "Authorization": "Bearer " + authToken
            }
        }
    }

    async getIssues(): Promise<Issue[]> {
        try {
            const resp = await axios.get(this.baseUrl + "/issues", this.config)
            const { data } = resp

            const issues = data.map((json: any) => {
                return {
                    id: json.id
                    , state: json.state
                    , title: json.title
                    , body: json.body
                    , comments: null
                }
            })

            return issues
        } catch (err) {
            return new Promise((_, reject) => {
                reject("Oops! Could not retrieve your issues.")
            })
        }
    }

    async createIssue(title: string, body: string): Promise<Issue> {
        try {
            const resp = await axios.post(this.baseUrl + "/issues", { title, body }, this.config)
            const { data } = resp

            const issue = {
                id: data.id
                , state: data.state
                , title: data.title
                , body: data.body
                , comments: null
            }

            return issue
        } catch (err) {
            return new Promise((_, reject) => {
                reject("Oops! Could not create an issues.")
            })
        }
    }
}