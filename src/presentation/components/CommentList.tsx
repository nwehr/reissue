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
    }, [props.controller, props.issueId])

    const handleChangeComment = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMyComment(e.currentTarget.value)
    }

    const handleSubmitComment = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setComments([...comments, await props.controller.createComment(props.issueId, myComment)])
        setMyComment("")
    }

    // const handleDeleteComment = (commentId: number) => async () => {
        
    // }

    if (error) {
        return <p>{error}</p>
    }

    return <>
        {
            comments.map((comment: Comment) => <CommentCard comment={comment} />)
        }

        <Form onSubmit={handleSubmitComment}>
            <Form.Group>
                <Form.Control style={{margin: "0 0 1em 0"}} as="textarea" placeholder="Write your comment here..." value={myComment} onChange={handleChangeComment} />
                <Button type="submit">Add Comment</Button>
            </Form.Group>
        </Form>

    </>
}

export default CommentList