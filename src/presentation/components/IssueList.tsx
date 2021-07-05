import { useEffect, useState } from "react"
import { useSelector } from "react-redux"
import { Issue } from "../../core/entities/issue"
import { AppState } from "../../state/store"
import { IssueListController } from "../controllers/IssueListController"
import IssueItem from "./IssueItem"

export interface IssueListProps {
    controller: IssueListController
    numIssues: number
}

const IssueList = (props: IssueListProps) => {
    const { controller, numIssues } = props
    const { selectedProject } = useSelector((state: AppState) => state)

    const [issues, setIssues] = useState<Issue[]>([])
    const [closedIssueIds, setClosedIssueIds] = useState<number[]>([])
    const [error, setError] = useState<string | null>(null)

    useEffect(() => {
        const fetchIssues = async () => {
            try {
                setError(null)
                setIssues(await controller.getIssues())
            } catch (err) {
                setError(err)
            }
        }

        if (selectedProject?.name) {
            fetchIssues()
        }

        return () => {
            setIssues([])
            setError(null)
        }
    }, [controller, selectedProject?.name, numIssues])

    const handleCloseIssue = async (id: number) => {
        const success = await controller.closeIssue(id)

        if (success) {
            setClosedIssueIds([...closedIssueIds, id])
        }
    }

    if (error) {
        return <p className="text-danger">{error}</p>
    }

    return <>
        {
            issues
                .filter((issue: Issue) => {
                    for (let id of closedIssueIds) {
                        if (id === issue.id) {
                            return false
                        }
                    }

                    return true
                })
                .map((issue: Issue) => {
                    return <IssueItem key={issue.id} issue={issue} onCloseIssue={handleCloseIssue} />
                })
        }
    </>
}

export default IssueList