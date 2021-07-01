import { MemCommentRepo } from "../../repos/commentrepo"

test("get comments", async () => {
    const repo = new MemCommentRepo()

    const issue100Comments = await repo.getComments(100)
    expect(issue100Comments.length).toBe(1)
    expect(issue100Comments[0].id).toBe(1)
    expect(issue100Comments[0].body).toBe("Here is a pithy comment")


    const issue101Comments = await repo.getComments(101)
    expect(issue101Comments.length).toBe(1)
    expect(issue101Comments[0].id).toBe(2)
    expect(issue101Comments[0].body).toBe("Another comment")
})