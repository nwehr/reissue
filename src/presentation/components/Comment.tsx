import { Card, Button } from "react-bootstrap"
import { Comment } from "../../core/entities/comment"
import moment from "moment"

export interface CommentCardProps {
    comment: Comment
    onDeleteComment: (id: number) => void
}

const CommentCard = (props: CommentCardProps) => {
    const createdAt = moment(props.comment.createdAt).format("llll")

    return <Card style={{marginBottom: "1em"}}>
        <Card.Body>
            <Button variant="outline-danger" size="sm" style={{ float: "right" }} onClick={() => props.onDeleteComment(props.comment.id)} >Delete</Button>
            <Card.Text>{props.comment.body}</Card.Text>
            <Card.Text style={{color: "gray"}}><b>{props.comment.author.userName}</b> commented on {createdAt}</Card.Text>
        </Card.Body>
    </Card>
}

export default CommentCard