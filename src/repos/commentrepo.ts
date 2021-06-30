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
}