import { Project, IProjectRepo } from "./project"

class MemProjectRepo implements IProjectRepo {
    projects: Project[] = [
        {
            baseUrl: "http://someendpoint"
            , authToken: "abc123"
            , schema: "github"
        }
        , {
            baseUrl: "http://anotherendpoint"
            , authToken: "123abc"
            , schema: "gitlab"
        }
    ]

    getProjects(): Project[] {
        return this.projects
    }
}

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