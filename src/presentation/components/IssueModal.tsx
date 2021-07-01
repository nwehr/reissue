import { useState } from "react"
import { Button, Modal, Form } from "react-bootstrap"
import { IssueModalController } from "../controllers/IssueModalController"

interface IssueModalProps {
    onCreatedNewIssue: () => void
    controller: IssueModalController
}

const IssueModal = (props: IssueModalProps) => {
    const [showModal, setShowModal] = useState<boolean>(false)

    const [issueTitle, setIssueTitle] = useState<string>("")
    const [issueBody, setIssueBody] = useState<string>("")

    const handleShow = () => {
        setIssueTitle("")
        setIssueBody("")
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const handleSave = async () => {
        await props.controller.createIssue(issueTitle, issueBody)
        props.onCreatedNewIssue()
        setShowModal(false)
    }

    const handleUpdateTitle = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIssueTitle(e.currentTarget.value)
    }

    const handleUpdateBody = (e: React.ChangeEvent<HTMLInputElement>) => {
        setIssueBody(e.currentTarget.value.trim())
    }

    const valid = () => {
        if (!issueTitle) {
            return false
        }

        return true
    }

    return <>
        <Button onClick={handleShow} style={{ float: "right", marginRight: ".5em" }}>New Issue</Button>

        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Create Issue</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="issueFormTitle">
                        <Form.Label>Title</Form.Label>
                        <Form.Control type="text" onChange={handleUpdateTitle} />
                    </Form.Group>

                    <Form.Group controlId="issueFormBody">
                        <Form.Label>Description</Form.Label>
                        <Form.Control as="textarea" onChange={handleUpdateBody} />
                        {/* <Form.Text style={{color: "gray"}}>Optional</Form.Text> */}
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave} disabled={!valid()}>
                    Create Issue
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}

export default IssueModal