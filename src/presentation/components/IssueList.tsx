import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Issue } from "../../core/entities/issue"
import { AppState } from "../../state/store"

import { IssueListController } from "../controllers/IssueListController"
import IssueCard from "./Issue"

export interface IssueListProps {
    controller: IssueListController
    numCreatedIssues: number
}

const IssueList = (props: IssueListProps) => {
    const [issues, setIssues] = useState<Issue[]>([])
    const [error, setError] = useState<string | null>(null)

    const { selectedProject } = useSelector((state: AppState) => state)


    useEffect(() => {
        const fetchIssues = async () => {
            try {
                setIssues(await props.controller.getIssues())
            } catch (err) {
                setError(err)
            }
        }

        setIssues([])
        setError(null)

        if (selectedProject?.name) {
            fetchIssues()
        }

        return () => {
            setIssues([])
            setError(null)
        }
    }, [props.controller, selectedProject?.name, props.numCreatedIssues])

    if (error) {
        return <p className="text-danger">{error}</p>
    }

    return <>
        {
            issues.map((issue: Issue) => <IssueCard key={issue.id} issue={issue} />)
        }
    </>
}

export default IssueList