import { Issue, IIssueRepo } from "../core/entities/issue"

export class MemIssueRepo implements IIssueRepo {
    issues: Issue[] = [
        {
            id: 100
            , state: "open"
            , title: "An issues"
            , body: ""
        }
        , {
            id: 101
            , state: "open"
            , title: "Another issue"
            , body: "Here is the body"
        }
    ]

    getIssues(): Promise<Issue[]> {
        return new Promise((resolve, reject) => {
            resolve(this.issues)
        })
    }
}