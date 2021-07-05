import { Comment } from "../../core/entities/comment"
import { CommentListController } from "../controllers/CommentListController"
import { useComments } from "./hooks/comments"
import CommentItem from "./CommentItem"
import CommentForm from "./CommentForm"

export interface CommentListProps {
    issueId: number
    controller: CommentListController
}

const CommentList = (props: CommentListProps) => {
    const { issueId, controller } = props
    const { comments, deletedCommentIds, createComment, deleteComment, error } = useComments(issueId, controller)

    if (error) {
        return <p className="text-danger">{error}</p>
    }

    return <>
        {
            comments
                .filter(byExcludingAny(deletedCommentIds))
                .map((comment: Comment) => <CommentItem key={comment.id} comment={comment} onDeleteComment={deleteComment} />)
        }

        <CommentForm onSubmitComment={createComment} />
    </>
}

interface Identifiable {
    id: number
}

const byExcludingAny = (ids: number[]) => (item: Identifiable) => {
    for (let id of ids) {
        if (id === item.id) {
            return false
        }
    }

    return true
}

export default CommentList