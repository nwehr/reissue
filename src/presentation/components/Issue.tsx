import { useState } from "react"
import { Card } from "react-bootstrap"
import { Issue as IssueFields } from "../../core/entities/issue"
import { CommentListController } from "../controllers/CommentListController"
import CommentList from "./CommentList"

export interface IssueProps {
    issue: IssueFields
}

const Issue = (props: IssueProps) => {
    const [showComments, setShowComments] = useState<boolean>(false)

    return <Card style={{ marginBottom: "1em" }}>
        <Card.Body>
            <Card.Title>{props.issue.title}</Card.Title>
            {
                props.issue.body
                    ? <Card.Text>{props.issue.body}</Card.Text>
                    : <Card.Text><i style={{ color: "gray" }}>No description provided.</i></Card.Text>
            }

        </Card.Body>
        <Card.Footer>
            {
                showComments
                    ? <div>
                        <CommentList issueId={props.issue.id} controller={new CommentListController()} />
                        <span className="a text-primary" onClick={() => setShowComments(false)}>Hide comments</span>
                    </div>
                    : <div>
                        <span className="a text-primary" onClick={() => setShowComments(true)}>Show comments ({props.issue.comments})</span>
                    </div>

            }

        </Card.Footer>
    </Card>
}

export default Issue