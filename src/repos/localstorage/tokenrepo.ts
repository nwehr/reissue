import { AuthToken, IAuthTokenRepo } from "../../core/entities/authtoken"
import { Project } from "../../core/entities/project"
import { ProjectRepo } from "./projectrepo"

export class AuthTokenRepo implements IAuthTokenRepo {
    getTokens(): AuthToken[] {
        const projects: Project[] = (new ProjectRepo()).getProjects()
        const authTokens: AuthToken[] = []

        const tokenInList = (token: AuthToken, tokenList: AuthToken[]): boolean => {
            for (let existingToken of tokenList) {
                if (existingToken.name === token.name && existingToken.token === token.token) {
                    return true
                }
            }

            return false
        }

        for (let project of projects) {
            if (!tokenInList(project.authToken, authTokens)) {
                authTokens.push(project.authToken)
            }   
        }

        return authTokens
    }

    getTokenByName(name: string): AuthToken {
        for (let token of this.getTokens()) {
            if (token.name === name) {
                return token
            }
        }

        return {name: "", token: ""}
    }

    createToken(token: AuthToken): AuthToken {
        return token
    }
}