import React, { useEffect, useState } from "react"
import { Form, Button } from "react-bootstrap"
import { Comment } from "../../core/entities/comment"
import { CommentListController } from "../controllers/CommentListController"

import CommentCard from "./Comment"

export interface CommentListProps {
    issueId: number
    controller: CommentListController
}

const CommentList = (props: CommentListProps) => {
    const [comments, setComments] = useState<Comment[]>([])
    const [myComment, setMyComment] = useState<string>("")
    const [error, setError] = useState<string | null>(null)
    const [deletedCommentIds, setDeletedCommentIds] = useState<number[]>([])

    useEffect(() => {
        const fetch = async () => {
            try {
                setComments(await props.controller.getComments(props.issueId))
            } catch(err) {
                setError(err)
            }
        }

        setError(null)
        fetch()

        return () => {
            setComments([])
            setError(null)
        }
    }, [props.controller, props.issueId])

    const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMyComment(e.currentTarget.value)
    }

    const handleSubmitComment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()

        if (!myComment.length) {
            return
        }

        setComments([...comments, await props.controller.createComment(props.issueId, myComment)])
        setMyComment("")
    }

    const handleDeleteComment = async (id: number) => {
        const success = await props.controller.deleteComment(props.issueId, id)

        if (success) {
            setDeletedCommentIds([...deletedCommentIds, id])
        }
    }

    if (error) {
        return <p>{error}</p>
    }

    return <>
        {
            comments
                .filter((comment: Comment) => {
                    for (let id of deletedCommentIds) {
                        if (id == comment.id) {
                            return false
                        }
                    }

                    return true
                })
                .map((comment: Comment) => <CommentCard key={comment.id} comment={comment} onDeleteComment={handleDeleteComment} />)
        }

        <Form onSubmit={handleSubmitComment}>
            <Form.Group>
                <Form.Control style={{margin: "0 0 1em 0"}} as="textarea" placeholder="Leave a comment." value={myComment} onChange={handleChangeComment} />
                <Button type="submit" size="sm">Comment</Button>
            </Form.Group>
        </Form>

    </>
}

export default CommentList