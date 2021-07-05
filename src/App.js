import { useAuth0 } from "@auth0/auth0-react";
import Topbar from "./presentation/components/Topbar"
import Sidebar from "./presentation/components/Sidebar"
import Project from "./presentation/components/Project"

const App = () => {
	const { isAuthenticated, isLoading } = useAuth0();

	if (!isAuthenticated) {
		if (isLoading) {
			return <p>Loading...</p>
		}

		return <>
			<Topbar />
			<div style={{ marginTop: "4em" }}>
				<h4>Welcome to <b>ReIssue!</b></h4>
				<p>ReIssue consolodates issue tracking from multiple repositories. So far its supports <a href="https://github.com">Github</a>, <a href="https://gitlab.com">Gitlab</a> and <a href="https://gitea.com">Gitea</a>.</p>
				<p>Get started by adding your first project!</p>
			</div>
		</>
	}

	return <>
		<Topbar />
		<Sidebar />
		<div style={{ marginLeft: "15em", marginTop: "4em" }}>
			<Project />
		</div>
	</>
}

export default App;
