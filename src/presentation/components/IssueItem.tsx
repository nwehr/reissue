import { useState } from "react"
import { Card, Button } from "react-bootstrap"
import { Issue } from "../../core/entities/issue"
import { CommentListController } from "../controllers/CommentListController"
import CommentList from "./CommentList"

export interface IssueItemProps {
    issue: Issue
    onCloseIssue: (id: number) => void
}

const IssueItem = (props: IssueItemProps) => {
    const { issue } = props
    const [showComments, setShowComments] = useState<boolean>(false)

    return <Card style={{ marginBottom: "1em" }}>
        <Card.Body>
            <Button variant="outline-danger" size="sm" style={{ float: "right" }} onClick={() => props.onCloseIssue(issue.id)}>Close Issue</Button>
            <Card.Text>{issue.title}</Card.Text>
            {
                issue.body
                    ? <Card.Text style={{ color: "gray" }}>{issue.body}</Card.Text>
                    : <Card.Text style={{ color: "gray" }}><i>No description provided.</i></Card.Text>
            }

        </Card.Body>
        <Card.Footer>
            {
                showComments
                    ? <div>
                        <CommentList issueId={issue.id} controller={new CommentListController()} />
                        <span className="a text-primary" onClick={() => setShowComments(false)}>Hide comments</span>
                    </div>
                    : <div>
                        <span className="a text-primary" onClick={() => setShowComments(true)}>Comments ({issue.comments})</span>
                    </div>

            }

        </Card.Footer>
    </Card>
}

export default IssueItem