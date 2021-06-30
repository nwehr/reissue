import React, { useEffect, useState } from "react"
import { Form, Col, Button, InputGroup } from "react-bootstrap"
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
    const [myIssue, setMyIssue] = useState<string>("")

    const selectedProject = useSelector((state: AppState) => state.selectedProject)

    useEffect(() => {
        const fetch = async () => {
            setIssues(await props.controller.getIssues())
        }

        setIssues([])
        fetch()
    }, [selectedProject?.name])

    const handleUpdateMyIssue = (e: React.ChangeEvent<HTMLInputElement>) => {
        setMyIssue(e.currentTarget.value)
    }

    const handleSubmitMyIssue = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        setIssues([...issues, await props.controller.createIssue(myIssue)])
        setMyIssue("")
    }

    return <>
        {
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
        }


        {
            issues.map((issue: Issue) => <IssueCard issue={issue} />)
        }
    </>
}

export default IssueList