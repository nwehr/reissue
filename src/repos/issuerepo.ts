import { Issue, IIssueRepo } from "../core/entities/issue"

export class MemIssueRepo implements IIssueRepo {
    issues: Issue[] = [
        {
            id: 100
            , state: "open"
            , title: "An issues"
            , body: ""
            , comments: 0
        }
        , {
            id: 101
            , state: "open"
            , title: "Another issue"
            , body: "Here is the body"
            , comments: 0
        }
    ]

    getIssues(): Promise<Issue[]> {
        return new Promise((resolve, reject) => {
            resolve(this.issues)
        })
    }

    createIssue(title: string): Promise<Issue> {
        return new Promise((resolve, reject) => {
            const issue = {
                id: 99
                , state: "open"
                , title
                , body: ""
                , comments: 0
            }

            this.issues.push(issue)

            resolve(issue)
        })
    }
}