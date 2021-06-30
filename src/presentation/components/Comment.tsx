import { Card } from "react-bootstrap"
import { Comment } from "../../core/entities/comment"
import moment from "moment"

export interface CommentCardProps {
    comment: Comment
}

const CommentCard = (props: CommentCardProps) => {
    const createdAt = moment(props.comment.createdAt).format("llll")

    return <Card>
        <Card.Body>
            <Card.Text>{props.comment.body}</Card.Text>
            <Card.Text>{createdAt} <b>{props.comment.author.userName}</b></Card.Text>
        </Card.Body>
    </Card>
}

export default CommentCard