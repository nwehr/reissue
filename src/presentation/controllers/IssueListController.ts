import { IIssueRepo, Issue } from "../../core/entities/issue";
import { GithubIssueRepo } from "../../repos/github/issuerepo";
import store from "../../state/store";

export class IssueListController {
    repo: IIssueRepo | null

    constructor() {
        this.repo = null
    }

    getIssues(): Promise<Issue[]> {
        const project = store.getState().selectedProject

        if (project) {
            const repo = new GithubIssueRepo(project.baseUrl, project.authToken)
            return repo.getIssues()
        }

        return new Promise((resolve, reject) => {
            reject("No project selected")
        })
    }
}