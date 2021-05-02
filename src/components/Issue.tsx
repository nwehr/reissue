import { Card } from "react-bootstrap"
import CommentList from "./CommentList"

export interface IssueProps {
    id: number
    title: string
    body: string
}

const Issue = (props: IssueProps) => {
    return <Card style={{marginBottom: "1em"}}>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            <Card.Text>{props.body}</Card.Text>
        </Card.Body>
        <Card.Footer>
            <CommentList issueId={props.id} />
        </Card.Footer>
    </Card>
}

export default Issue