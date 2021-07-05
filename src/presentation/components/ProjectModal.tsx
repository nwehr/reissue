import { Button, Modal, Form } from "react-bootstrap"
import { Project } from "../../core/entities/project"
import { useProject, useProjectConnectionTest } from "./hooks/newproject"
import { useModal } from "./hooks/modal"


interface NewProjectModalProps {
    onSubmitNewProject: (project: Project) => void
}

const ProjectModal = (props: NewProjectModalProps) => {
    const { isOpen, open, close } = useModal()
    const { project, valid, updateName, updateBaseUrl, updateAuthToken, updateSchema } = useProject()
    const { success, error, testConnection } = useProjectConnectionTest(project)

    const save = () => {
        props.onSubmitNewProject(project)
        close()
    }

    console.log("valid", valid)

    return <>
        <Button onClick={open} style={{ position: "absolute", bottom: "1em", left: "1em", width: "calc(100% - 2em)" }}>Add Project</Button>

        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Add Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                {
                    error
                        ? <p className="text-danger">{error}</p>
                        : null
                }

                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" onChange={updateName} />
                    </Form.Group>

                    <Form.Group controlId="formBaseUrl">
                        <Form.Label>Base URL</Form.Label>
                        <Form.Control type="text" onChange={updateBaseUrl} />
                        <Form.Text style={{ color: "gray" }}>{"https://api.github.com/repos/{owner}/{repo}"}</Form.Text>
                        <Form.Text style={{ color: "gray" }}>{"https://gitlab.com/api/v4/projects/{project_id}"}</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formAuthToken">
                        <Form.Label>Personal Access Token</Form.Label>
                        <Form.Control type="password" onChange={updateAuthToken} />
                        <Form.Text style={{ color: "gray" }}>See <a href="https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token" target="_blank" rel="noreferrer">docs</a> on creating a personal access token.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formAuthToken">
                        <Form.Label>Schema</Form.Label>
                        <Form.Control as="select" onChange={updateSchema}>
                            <option>github</option>
                            <option>gitlab</option>
                            <option>gitea</option>
                            <option disabled>bitbucket</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
                <Button variant={success && valid ? "success" : "secondary"} onClick={testConnection}>
                    Test Connection
                </Button>
                <Button variant="secondary" onClick={close}>
                    Close
                </Button>
                <Button variant="primary" onClick={save} disabled={!valid}>
                    Add Project
                </Button>
            </Modal.Footer>
        </Modal>
    </>
}

export default ProjectModal