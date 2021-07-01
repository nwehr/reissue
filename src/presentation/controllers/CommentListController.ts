import { Comment } from "../../core/entities/comment";
import { GithubCommentRepo } from "../../repos/github/commentrepo";
import { GitlabCommentRepo } from "../../repos/gitlab/commentrepo";
import store from "../../state/store";

export class CommentListController {
    getComments(issueId: number): Promise<Comment[]> {
        const project = store.getState().selectedProject

        if (project) {
            const { schema, baseUrl, authToken } = project

            if (schema === "gitlab") {
                const repo = new GitlabCommentRepo(baseUrl, authToken)
                return repo.getComments(issueId)
            }

            const repo = new GithubCommentRepo(baseUrl, authToken)
            return repo.getComments(issueId)
        }

        return new Promise((_, reject) => {
            reject("No project selected")
        })
    }

    createComment(issueId: number, body: string): Promise<Comment> {
        const project = store.getState().selectedProject

        if (project) {
            const { schema, baseUrl, authToken } = project

            if (schema === "gitlab") {
                const repo = new GitlabCommentRepo(baseUrl, authToken)
                return repo.createComment(issueId, body)
            }

            const repo = new GithubCommentRepo(baseUrl, authToken)
            return repo.createComment(issueId, body)
        }

        return new Promise((_, reject) => {
            reject("No project selected")
        })
    }
}