import Sidebar from "./presentation/components/Sidebar"
import Project from "./presentation/components/Project"

const App = () => {
	return <div>
		<Sidebar />
		<div style={{marginLeft: "15em"}}>
			<Project />
		</div>
	</div>
}

export default App;
