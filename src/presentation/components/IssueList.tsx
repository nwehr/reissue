import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Issue } from "../../core/entities/issue"
import { AppState } from "../../state/store"

import { IssueListController } from "../controllers/IssueListController"
import IssueCard from "./Issue"

export interface IssueListProps {
    controller: IssueListController
}

const IssueList = (props: IssueListProps) => {
    const [issues, setIssues] = useState<Issue[]>([])
    const selectedProject = useSelector((state: AppState) => state.selectedProject)

    useEffect(() => {
        const fetch = async () => {
            setIssues(await props.controller.getIssues())
        }

        setIssues([])
        fetch()
    }, [selectedProject?.name])

    return <>
        {
            issues.map((issue: Issue) => <IssueCard id={issue.id} title={issue.title} body={issue.body} />)
        }
    </>
}

export default IssueList