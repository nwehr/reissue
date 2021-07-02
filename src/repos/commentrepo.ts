import { Comment, ICommentRepo } from "../core/entities/comment"

export class MemCommentRepo implements ICommentRepo {
    comments: Comment[] | any[] = [
        {
            id: 1
            , body: "Here is a pithy comment"
            , issue_id: 100
        }
        , {
            id: 2
            , body: "Another comment"
            , issue_id: 101
        }
    ]

    getComments(issueId: number): Promise<Comment[]> {
        return new Promise((resolve, reject) => {
            resolve(this.comments.filter((comment: any) => comment.issue_id === issueId))
        })
    }

    createComment(issueId: number, body: string): Promise<Comment> {
        return new Promise((resolve, reject) => {
            const comment = {
                id: 99
                , body
                , issue_id: issueId
                , createdAt: ""
                , updatedAt: ""
                , author: {
                    id: 0
                    , userName: ""
                }
            }

            this.comments.push(comment)

            resolve(comment)
        })
    }

    deleteComment(issueId: number, id: number): Promise<boolean> {
        const comments: Comment[] = []
        
        for (let comment of this.comments) {
            if (comment.id != id) {
                comments.push(comment)
            }
        }

        this.comments = comments

        return new Promise((resolve, _) => {
            resolve(true)
        })
    }
}