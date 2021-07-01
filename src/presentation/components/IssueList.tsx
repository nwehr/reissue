import React, { useEffect, useState } from "react"
// import { Form, Button, InputGroup } from "react-bootstrap"
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
    // const [myIssue, setMyIssue] = useState<string>("")
    const [error, setError] = useState<string | null>(null)

    const selectedProject = useSelector((state: AppState) => state.selectedProject)

    useEffect(() => {
        const fetch = async () => {
            try {
                setIssues(await props.controller.getIssues())
            } catch(err) {
                setError(err)
            }
        }

        setIssues([])
        setError(null)
        
        if (selectedProject?.name) {
            fetch()
        }

        return () => {
            setIssues([])
            setError(null)
        }
    }, [props.controller, selectedProject?.name])

    // const handleUpdateMyIssue = (e: React.ChangeEvent<HTMLInputElement>) => {
    //     setMyIssue(e.currentTarget.value)
    // }

    // const handleSubmitMyIssue = async (e: React.FormEvent<HTMLFormElement>) => {
    //     e.preventDefault()
    //     setIssues([...issues, await props.controller.createIssue(myIssue)])
    //     setMyIssue("")
    // }

    if (error) {
        return <p className="text-danger">{error}</p>
    }

    return <>
        {/* {
            selectedProject
                ? <Form style={{ marginBottom: "1em" }} onSubmit={handleSubmitMyIssue}>
                    <InputGroup>
                        <Form.Control value={myIssue} onChange={handleUpdateMyIssue} />
                        <InputGroup.Append>
                            <Button type="submit">Add Issue</Button>
                        </InputGroup.Append>
                    </InputGroup>
                </Form>
                : null
        } */}


        {
            issues.map((issue: Issue) => <IssueCard key={issue.id} issue={issue} />)
        }
    </>
}

export default IssueList