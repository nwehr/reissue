import { MemIssueRepo } from "../../repos/issuerepo"


test("get isues", () => {
    const repo = new MemIssueRepo()
    const issues = repo.getIssues()

    expect(issues.length).toBe(2)
    expect(issues[0].id).toBe(100)
    expect(issues[0].state).toBe("open")
})