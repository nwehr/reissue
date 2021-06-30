import { Row, Col } from "react-bootstrap"
import IssueList from "./presentation/components/IssueList"
import { MemIssueRepo } from "./repos/issuerepo"
import Sidebar from "./presentation/components/Sidebar"
import { IssueListController } from "./presentation/controllers/IssueListController"

const App = () => {
	return <div>
		<Sidebar />
		<div style={{marginLeft: "16em"}}>
			<IssueList controller={new IssueListController()} />
		</div>
	</div>
}

export default App;