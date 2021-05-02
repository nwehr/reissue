import { useState } from "react"
import { Comment, ICommentRepo } from "../core/entities/comment"
import { MemCommentRepo } from "../repos/commentrepo"

import CommentCard from "./Comment"

export interface CommentListProps {
    issueId: number
}

const CommentList = (props: CommentListProps) => {
    const [comments] = useState(new MemCommentRepo().getComments(props.issueId))

    return <>
        {
            comments.map((comment: Comment) => <CommentCard body={comment.body} />)
        }
    </>
}

export default CommentList