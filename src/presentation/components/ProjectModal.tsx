import { useState } from "react"
import { Button, Modal, Form } from "react-bootstrap"
import { Project } from "../../core/entities/project"

interface NewProjectModalProps {
    onSubmitNewProject: (project: Project) => void
}

const ProjectModal = (props: NewProjectModalProps) => {
    const [showModal, setShowModal] = useState<boolean>(false)
    const [project, setProject] = useState<Project>({ name: "", baseUrl: "", authToken: "", schema: "github" })

    const handleShow = () => {
        setProject({ name: "", baseUrl: "", authToken: "", schema: "github" })
        setShowModal(true)
    }

    const handleClose = () => {
        setShowModal(false)
    }

    const handleSave = () => {
        props.onSubmitNewProject(project)
        setShowModal(false)
    }

    const handleUpdateName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProject({ ...project, name: e.currentTarget.value })
    }

    const handleUpdateBaseUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProject({ ...project, baseUrl: e.currentTarget.value.trim() })
    }

    const handleUpdateAuthToken = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProject({ ...project, authToken: e.currentTarget.value.trim() })
    }

    const handleUpdateSchema = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProject({ ...project, schema: e.currentTarget.value.trim() })
    }

    const valid = () => {
        if (!project.name || !project.baseUrl || !project.authToken) {
            return false
        }

        return true
    }

    return <>
        <Button onClick={handleShow} style={{ position: "absolute", bottom: "1em", left: "1em", width: "calc(100% - 2em)" }}>Add Project</Button>

        <Modal show={showModal} onHide={handleClose}>
            <Modal.Header closeButton>
                <Modal.Title>Add Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" onChange={handleUpdateName} />
                    </Form.Group>

                    <Form.Group controlId="formBaseUrl">
                        <Form.Label>Base URL</Form.Label>
                        <Form.Control type="text" onChange={handleUpdateBaseUrl} />
                        <Form.Text style={{ color: "gray" }}>e.g. {"https://api.github.com/repos/{owner}/{project}"}</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formAuthToken">
                        <Form.Label>Personal Access Token</Form.Label>
                        <Form.Control type="password" onChange={handleUpdateAuthToken} />
                        <Form.Text style={{ color: "gray" }}>See <a href="https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token" target="_blank" rel="noreferrer">docs</a> on creating a personal access token.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formAuthToken">
                        <Form.Label>Schema</Form.Label>
                        <Form.Control as="select" onChange={handleUpdateSchema}>
                            <option>github</option>
                            <option>gitlab</option>
                            <option>gitea</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant="secondary" onClick={handleClose}>
                    Close
                </Button>
                <Button variant="primary" onClick={handleSave} disabled={!valid()}>
                    Add Project
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}

export default ProjectModal