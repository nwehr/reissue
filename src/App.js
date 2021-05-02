import IssueList from "./components/IssueList"
import { MemIssueRepo } from "./repos/issuerepo"

const App = () => {
  return <div>
    <IssueList repo={new MemIssueRepo()} />
  </div>
}

export default App;
