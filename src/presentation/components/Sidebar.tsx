import ProjectList from "./ProjectList"
import { ProjectListController } from "../controllers/ProjectListController"
import { LocalStroageProjectRepo } from "../../repos/localstorage/projectrepo"

const Sidebar = () => {
    return <div className="sidebar">
        <ProjectList />
    </div>
}

export default Sidebar