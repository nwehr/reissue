import { Card } from "react-bootstrap"

export interface CommentProps {
    body: string
}

const Comment = (props: CommentProps) => {
    return <Card>
        <Card.Body>
            <Card.Text>{ props.body }</Card.Text>
        </Card.Body>
    </Card>
}

export default Comment