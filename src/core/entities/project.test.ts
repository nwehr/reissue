import { MemProjectRepo } from "../../repos/projectrepo"

test("get projects", () => {
    const repo = new MemProjectRepo()

    const projects = repo.getProjects()

    expect(projects.length).toBe(2)

    expect(projects[0].baseUrl).toBe("http://someendpoint")
    expect(projects[0].authToken).toBe("abc123")
    expect(projects[0].schema).toBe("github")

    expect(projects[1].baseUrl).toBe("http://anotherendpoint")
    expect(projects[1].authToken).toBe("123abc")
    expect(projects[1].schema).toBe("gitlab")
})