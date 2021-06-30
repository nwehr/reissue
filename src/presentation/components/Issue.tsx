import { Card } from "react-bootstrap"
import { CommentListController } from "../controllers/CommentListController"
import CommentList from "./CommentList"

export interface IssueProps {
    id: number
    title: string
    body: string
}

const Issue = (props: IssueProps) => {
    return <Card style={{ marginBottom: "1em" }}>
        <Card.Body>
            <Card.Title>{props.title}</Card.Title>
            {
                props.body
                    ? <Card.Text>{props.body}</Card.Text>
                    : <Card.Text><i style={{color: "gray"}}>No description provided.</i></Card.Text>
            }

        </Card.Body>
        <Card.Footer>
            <CommentList issueId={props.id} controller={new CommentListController()} />
        </Card.Footer>
    </Card>
}

export default Issue