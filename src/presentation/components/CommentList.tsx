import { useEffect, useState } from "react"
import { Comment, ICommentRepo } from "../../core/entities/comment"
import { MemCommentRepo } from "../../repos/commentrepo"
import { CommentListController } from "../controllers/CommentListController"

import CommentCard from "./Comment"

export interface CommentListProps {
    issueId: number
    controller: CommentListController
}

const CommentList = (props: CommentListProps) => {
    const [comments, setComments] = useState<Comment[]>([])

    useEffect(() => {
        const fetch = async () => {
            setComments(await props.controller.getComments(props.issueId))
        }

        fetch()
    })

    return <>
        {
            comments.map((comment: Comment) => <CommentCard comment={comment} />)
        }
    </>
}

export default CommentList