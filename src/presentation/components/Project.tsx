import { useSelector } from "react-redux"
import { AppState } from "../../state/store"
import { IssueListController } from "../controllers/IssueListController"
import IssueList from "./IssueList"
import ProjectIcon from "./ProjectIcon"

interface ProjectProps {

}

const Project = (props: ProjectProps) => {
    const selectedProject = useSelector((state: AppState) => state.selectedProject)

    if (!selectedProject) {
        return <>
            <h4>Welcome to <b>ReIssue!</b></h4>
            <p>ReIssue consolodates issue tracking from multiple repositories. So far its supports <a href="https://github.com">Github</a>, <a href="https://gitlab.com">Gitlab</a> and <a href="https://gitea.com">Gitea</a>.</p>
            <p>Get started by adding your first project!</p>
        </>
    }

    return <>
        <h4><ProjectIcon schema={selectedProject.schema} /> {selectedProject.name}</h4>
        <p>{selectedProject.baseUrl}</p>

        <IssueList controller={new IssueListController()} />
    </>
}

export default Project