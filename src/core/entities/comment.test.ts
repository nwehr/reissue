import { MemCommentRepo } from "../../repos/commentrepo"

test("get comments", () => {
    const repo = new MemCommentRepo()

    const issue100Comments = repo.getComments(100)
    expect(issue100Comments.length).toBe(1)
    expect(issue100Comments[0].id).toBe(1)
    expect(issue100Comments[0].body).toBe("Here is a pithy comment")


    const issue101Comments = repo.getComments(101)
    expect(issue101Comments.length).toBe(1)
    expect(issue101Comments[0].id).toBe(2)
    expect(issue101Comments[0].body).toBe("Another comment")
})