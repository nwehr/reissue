import { useEffect, useState } from "react"
import { CommentListController } from "../../controllers/CommentListController"
import { Comment } from "../../../core/entities/comment"

export const useComments = (issueId: number, controller: CommentListController) => {
    const [comments, setComments] = useState<Comment[]>([])
    const [deletedCommentIds, setDeletedCommentIds] = useState<number[]>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetch = async () => {
            try {
                setComments(await controller.getComments(issueId))
            } catch (err) {
                setError(err)
            }
        }

        setError(null)
        fetch()

        return () => {
            setComments([])
            setError(null)
        }
    }, [controller, issueId])

    const createComment = async (body: string) => {
        if (body.length) {
            setComments([...comments, await controller.createComment(issueId, body)])
        }
    }

    const deleteComment = async (id: number) => {
        const success = await controller.deleteComment(issueId, id)

        if (success) {
            setDeletedCommentIds([...deletedCommentIds, id])
        }
    }

    return {
        comments
        , deletedCommentIds
        , error
        , createComment
        , deleteComment
    }
}