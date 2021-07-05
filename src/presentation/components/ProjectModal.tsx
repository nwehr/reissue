import { useEffect } from "react"
import { Button, Modal, Form } from "react-bootstrap"
import { Project } from "../../core/entities/project"
import { useProject } from "./hooks/project"
import { useModal } from "./hooks/modal"
import AuthTokenSelect from "./AuthTokenSelect"


interface NewProjectModalProps {
    onSubmitNewProject: (project: Project) => void
}

const ProjectModal = (props: NewProjectModalProps) => {
    const { isOpen, open, close } = useModal()
    const { project, valid, updateName, updateBaseUrl, updateAuthToken, updateSchema, reset } = useProject()

    useEffect(() => {
        if (isOpen) {
            reset()
        }
    }, [isOpen])

    const save = () => {
        props.onSubmitNewProject(project)
        close()
    }

    return <>
        <Button onClick={open} style={{ position: "absolute", bottom: "1em", left: "1em", width: "calc(100% - 2em)" }}>Add Project</Button>

        <Modal show={isOpen} onHide={close}>
            <Modal.Header closeButton>
                <Modal.Title>Add Project</Modal.Title>
            </Modal.Header>
            <Modal.Body>
                <Form>
                    <Form.Group controlId="formName">
                        <Form.Label>Name</Form.Label>
                        <Form.Control type="text" onChange={updateName} value={project.name} />
                    </Form.Group>

                    <Form.Group controlId="formBaseUrl">
                        <Form.Label>Base URL</Form.Label>
                        <Form.Control type="text" onChange={updateBaseUrl} value={project.baseUrl} />
                        <Form.Text style={{ color: "gray" }}>{"https://api.github.com/repos/{owner}/{repo}"}</Form.Text>
                        <Form.Text style={{ color: "gray" }}>{"https://gitlab.com/api/v4/projects/{project_id}"}</Form.Text>
                    </Form.Group>

                    <AuthTokenSelect authToken={project.authToken} onSelectAuthToken={updateAuthToken} />

                    <Form.Group controlId="formSchema">
                        <Form.Label>Schema</Form.Label>
                        <Form.Control as="select" onChange={updateSchema} value={project.schema}>
                            <option>github</option>
                            <option>gitlab</option>
                            <option>gitea</option>
                            <option disabled>bitbucket</option>
                        </Form.Control>
                    </Form.Group>
                </Form>
            </Modal.Body>
            <Modal.Footer>
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