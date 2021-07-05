import { IIssueRepo, Issue } from "../../core/entities/issue";
import { GithubIssueRepo } from "../../repos/github/issuerepo";
import { GitlabIssueRepo } from "../../repos/gitlab/issuerepo";
import store from "../../state/store";

export class IssueListController {
    repo: IIssueRepo | null

    constructor() {
        this.repo = null
    }

    getIssues(): Promise<Issue[]> {
        const project = store.getState().selectedProject

        if (project) {
            if (project.schema === "gitlab") {
                const repo = new GitlabIssueRepo(project.baseUrl, project.authToken.token)
                return repo.getIssues()
            }

            const repo = new GithubIssueRepo(project.baseUrl, project.authToken.token)
            return repo.getIssues()
        }

        return new Promise((_, reject) => {
            reject("No project selected")
        })
    }

    createIssue(title: string, body: string): Promise<Issue> {
        const project = store.getState().selectedProject

        if (project) {
            if (project.schema === "gitlab") {
                const repo = new GitlabIssueRepo(project.baseUrl, project.authToken.token)
                return repo.createIssue(title, body)
            }

            const repo = new GithubIssueRepo(project.baseUrl, project.authToken.token)
            return repo.createIssue(title, body)
        }

        return new Promise((_, reject) => {
            reject("No project selected")
        })
    }

    closeIssue(id: number): Promise<boolean> {
        const project = store.getState().selectedProject

        if (project) {
            if (project.schema === "gitlab") {
                const repo = new GitlabIssueRepo(project.baseUrl, project.authToken.token)
                return repo.closeIssue(id)
            }

            const repo = new GithubIssueRepo(project.baseUrl, project.authToken.token)
            return repo.closeIssue(id)
        }

        return new Promise((_, reject) => {
            reject("No project selected")
        })
    }
}