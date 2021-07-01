import { useState } from "react"
import { useSelector } from "react-redux"
import { Row, Col, Button } from "react-bootstrap"
import { AppState } from "../../state/store"
import { IssueListController } from "../controllers/IssueListController"
import IssueList from "./IssueList"
import ProjectIcon from "./ProjectIcon"
import IssueModal from "./IssueModal"
import { IssueModalController } from "../controllers/IssueModalController"

const Project = () => {
    const { selectedProject, numProjects } = useSelector((state: AppState) => state)
    const [numCreatedIssues, setNumCreatedIssues] = useState<number>(0)

    if (!selectedProject) {
        if (!numProjects) {
            return <>
                <h4>Welcome to <b>ReIssue!</b></h4>
                <p>ReIssue consolodates issue tracking from multiple repositories. So far its supports <a href="https://github.com">Github</a>, <a href="https://gitlab.com">Gitlab</a> and <a href="https://gitea.com">Gitea</a>.</p>
                <p>Get started by adding your first project!</p>
            </>
        }

        return <></>
    }

    return <>
        <Row>
            <Col md={6}>
                <h4><ProjectIcon schema={selectedProject.schema} /> {selectedProject.name}</h4>
                <p>{selectedProject.baseUrl}</p>
            </Col>
            <Col>
                <Button style={{ float: "right" }} variant="secondary" disabled>Project Settings</Button>
                <IssueModal controller={new IssueModalController()} onCreatedNewIssue={() => setNumCreatedIssues(numCreatedIssues + 1)} />
                {/* <Button style={{ float: "right", marginRight: ".5em" }}>New Issue</Button> */}
            </Col>
        </Row>

        <IssueList numCreatedIssues={numCreatedIssues} controller={new IssueListController()} />
    </>
}

export default Project