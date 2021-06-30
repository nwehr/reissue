import { Comment } from "../../core/entities/comment";
import { GithubCommentRepo } from "../../repos/github/commentrepo";
import store from "../../state/store";

export class CommentListController {
    getComments(issueId: number): Promise<Comment[]> {
        const project = store.getState().selectedProject

        if (project) {
            if (project.schema === "gitlab") {
                return new Promise((resolve, reject) => {
                    reject("Comments not implemented for gitlab.")
                })
            }

            const repo = new GithubCommentRepo(project.baseUrl, project.authToken)
            return repo.getComments(issueId)
        }

        return new Promise((resolve, reject) => {
            reject("No project selected")
        })
    }

    createComment(issueId: number, body: string): Promise<Comment> {
        const project = store.getState().selectedProject

        if (project) {
            if (project.schema === "gitlab") {
                return new Promise((resolve, reject) => {
                    reject("Comments not implemented for gitlab.")
                })
            }

            const repo = new GithubCommentRepo(project.baseUrl, project.authToken)
            return repo.createComment(issueId, body)
        }

        return new Promise((resolve, reject) => {
            reject("No project selected")
        })
    }
}