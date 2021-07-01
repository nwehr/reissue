import { MemIssueRepo } from "../../repos/issuerepo"


test("get isues", async () => {
    const repo = new MemIssueRepo()
    const issues = await repo.getIssues()

    expect(issues.length).toBe(2)
    expect(issues[0].id).toBe(100)
    expect(issues[0].state).toBe("open")
})