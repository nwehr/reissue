import { CSSProperties, useState } from "react"
import { Card } from "react-bootstrap"
import { Issue as IssueFields } from "../../core/entities/issue"
import { CommentListController } from "../controllers/CommentListController"
import CommentList from "./CommentList"

const idStyle: CSSProperties = {
    color: "gray"
    // , fontStyle: "italic"
    // , fontSize: "smaller"
}

export interface IssueProps {
    issue: IssueFields
}

const Issue = (props: IssueProps) => {
    const { issue } = props
    const [showComments, setShowComments] = useState<boolean>(false)

    // return <div style={{ borderBottom: "solid 1px gray", marginBottom: "1em" }}>
    //     <h5>{issue.title}</h5>
    //     <p>
    //         {
    //             issue.body
    //                 ? issue.body
    //                 : <i style={{ color: "gray" }}>No description provided.</i>
    //         }
    //     </p>
    //     {
    //         showComments
    //             ? <div>
    //                 <CommentList issueId={issue.id} controller={new CommentListController()} />
    //                 <span className="a text-primary" onClick={() => setShowComments(false)}>Hide comments</span>
    //             </div>
    //             : <div>
    //                 <span className="a text-primary" onClick={() => setShowComments(true)}>Comments ({issue.comments})</span>
    //             </div>

    //     }
    // </div>

    return <Card style={{ marginBottom: "1em" }}>
        <Card.Body>
            <Card.Text>{issue.title}</Card.Text>
            {
                issue.body
                    ? <Card.Text>{issue.body}</Card.Text>
                    : <Card.Text><i style={{ color: "gray" }}>No description provided.</i></Card.Text>
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

export default Issue