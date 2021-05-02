import { useState } from "react"
import { Issue, IIssueRepo } from "../core/entities/issue"

import IssueCard from "./Issue"

export interface IssueListProps {
    repo: IIssueRepo
}

const IssueList = (props: IssueListProps) => {
    const [issues] = useState(props.repo.getIssues())

    return <>
        {
            issues.map((issue: Issue) => <IssueCard id={issue.id} title={issue.title} body={issue.body} />)
        }
    </>
}

export default IssueList