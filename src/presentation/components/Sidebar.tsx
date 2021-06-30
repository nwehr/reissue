import ProjectList from "./ProjectList"
import { ProjectListController } from "../controllers/ProjectListController"
import { LocalStroageProjectRepo } from "../../repos/localstorage/projectrepo"

interface SidebarProps {

}

const Sidebar = (props: SidebarProps) => {
    return <div className="sidebar">
        <ProjectList controller={new ProjectListController(new LocalStroageProjectRepo())} />
    </div>
}

export default Sidebar