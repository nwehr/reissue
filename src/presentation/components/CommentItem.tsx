import { Card, Button } from "react-bootstrap"
import { Comment } from "../../core/entities/comment"
import moment from "moment"

interface CommentItemProps {
    comment: Comment
    onDeleteComment: (id: number) => void
}

const CommentItem = (props: CommentItemProps) => {
    const { comment, onDeleteComment } = props
    const createdAt = moment(comment.createdAt).format("llll")

    return <Card className="comment">
        <Card.Body>
            <Button variant="outline-danger" size="sm" style={{ float: "right" }} onClick={() => onDeleteComment(comment.id)}>
                Delete
            </Button>

            <Card.Text>
                {comment.body}
            </Card.Text>

            <Card.Text style={{ color: "gray" }}>
                <b>{comment.author.userName}</b> commented on {createdAt}
            </Card.Text>
        </Card.Body>
    </Card>
}

export default CommentItem