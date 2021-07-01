import { IIssueRepo, Issue } from "../../core/entities/issue";
import { GithubIssueRepo } from "../../repos/github/issuerepo";
import { GitlabIssueRepo } from "../../repos/gitlab/issuerepo";
import store from "../../state/store";
import { incrementCreatedIssues } from "../../state/actions"

export class IssueModalController {
    async createIssue(title: string, body: string): Promise<Issue> {
        const project = store.getState().selectedProject

        if (project) {
            const { baseUrl, authToken, schema } = project

            if (schema === "gitlab") {
                const repo = new GitlabIssueRepo(baseUrl, authToken)
                return repo.createIssue(title, body)
            }

            const repo = new GithubIssueRepo(baseUrl, authToken)
            const issue = await repo.createIssue(title, body)

            // Launch nuclear missiles
            store.dispatch(incrementCreatedIssues(1))

            return issue
        }

        return new Promise((_, reject) => {
            reject("No project selected")
        })
    }
}