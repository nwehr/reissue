import { useEffect, useState } from "react"
import { Project } from "../../../core/entities/project"
import axios from "axios"
import { AuthToken } from "../../../core/entities/authtoken"

const initialProject = {
    name: ""
    , baseUrl: ""
    , authToken: {
        name: ""
        , token: ""
    }
    , schema: "github"
}

export const useProject = (p: Project = initialProject) => {
    const [project, setProject] = useState<Project>(p)
    const [valid, setValid] = useState(false)

    useEffect(() => {
        const fieldsCompleted = project.name.length > 0 && project.baseUrl.length > 0

        if (!fieldsCompleted) {
            setValid(false)
            return
        }

        const testConnection = async () => {
            try {
                await axios.get(project.baseUrl, {
                    headers: {
                        "Authorization": "Bearer " + project.authToken.token
                    }
                })

                setValid(true)
                return
            } catch (err) {
                setValid(false)
            }
        }

        testConnection()
    }, [project])

    const updateName = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProject({ ...project, name: e.currentTarget.value })
    }

    const updateBaseUrl = (e: React.ChangeEvent<HTMLInputElement>) => {
        setProject({ ...project, baseUrl: e.currentTarget.value.trim() })
    }

    const updateAuthToken = (authToken: AuthToken) => {
        setProject({ ...project, authToken })
    }

    const updateSchema = (e: React.ChangeEvent<HTMLSelectElement>) => {
        setProject({ ...project, schema: e.currentTarget.value.trim() })
    }

    const reset = () => {
        setProject(initialProject)
    }

    return {
        project
        , valid
        , updateName
        , updateBaseUrl
        , updateAuthToken
        , updateSchema
        , reset
    }
}

export const useProjectConnectionTest = (project: Project) => {
    const [success, setSuccess] = useState(false)
    const [error, setError] = useState("")

    const testConnection = async () => {
        setError("")
        setSuccess(false)

        try {
            await axios.get(project.baseUrl, {
                headers: {
                    "Authorization": "Bearer " + project.authToken
                }
            })

            setSuccess(true)
            return
        } catch (err) {
            setError(err.message)
        }
    }

    return {
        success
        , error
        , testConnection
    }
}
