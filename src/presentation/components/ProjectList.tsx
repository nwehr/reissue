import React, { useState } from "react"
import { Button, Modal, Form, Nav } from "react-bootstrap"
import { BsArrowDown } from "react-icons/bs"
import { FaGithub, FaGitlab } from "react-icons/fa"
import { Project } from "../../core/entities/project"
import { ProjectListController } from "../controllers/ProjectListController"

export interface ProjectListProps {
    controller: ProjectListController
}

const ProjectList = (props: ProjectListProps) => {
    const { controller } = props
    const [projects, setProjects] = useState<Project[]>(controller.getProjects())
    const [selectedProject, setSelectedProject] = useState<Project | null>(controller.getSelectedProject())

    const handleCreateProject = (project: Project) => {
        const p = controller.createProject(project.name, project.baseUrl, project.authToken, project.schema)
        setProjects([...projects, p])
    }

    const handleSelectProject = (name: string) => () => {
        setSelectedProject(controller.selectProject(name))
    }

    return <>
        <Nav className="flex-column">
            {
                projects.length
                    ? projects.map((project: Project) => {
                        const active = selectedProject ? selectedProject.name === project.name : false

                        return <Nav.Link key={project.name} active={active} eventKey={project.name} onClick={handleSelectProject(project.name)}>
                            {
                                project.schema === "gitlab"
                                ? <FaGitlab />
                                : <FaGithub />
                            }
                            {" "}{project.name}
                        </Nav.Link>
                    })
                    : <div style={{ textAlign: "center", margin: "1em" }}>
                        <span style={{ color: "gray" }}>Add your first project.</span>
                        <div>
                            <BsArrowDown size="1.5em" color="gray" style={{ marginTop: "1.5em" }} />
                        </div>
                    </div>
            }
        </Nav>

        <NewProjectModal onSubmitNewProject={handleCreateProject} />
    </>
}

interface NewProjectModalProps {
    onSubmitNewProject: (project: Project) => void
}

const NewProjectModal = (props: NewProjectModalProps) => {
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
                        <Form.Control type="text" onChange={handleUpdateAuthToken} />
                        <Form.Text style={{ color: "gray" }}>See <a href="https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token" target="_blank" rel="noreferrer">docs</a> on creating a personal access token.</Form.Text>
                    </Form.Group>

                    <Form.Group controlId="formAuthToken">
                        <Form.Label>Schema</Form.Label>
                        <Form.Control as="select" onChange={handleUpdateSchema}>
                            <option>github</option>
                            <option>gitlab</option>
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

export default ProjectList