import { Comment, ICommentRepo } from "../../core/entities/comment";
import { GithubCommentRepo } from "../../repos/github/commentrepo";
import store from "../../state/store";

export class CommentListController {
    getComments(issueId: number): Promise<Comment[]> {
        const project = store.getState().selectedProject

        if (project) {
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
            const repo = new GithubCommentRepo(project.baseUrl, project.authToken)
            return repo.createComment(issueId, body)
        }

        return new Promise((resolve, reject) => {
            reject("No project selected")
        })
    }
}