import { AuthToken, IAuthTokenRepo } from "../core/entities/authtoken"

export class AuthTokenRepo implements IAuthTokenRepo {
    tokens: AuthToken[] = []

    getTokens(): AuthToken[] {
        return this.tokens
    }

    getTokenByName(name: string): AuthToken | null {
        for (let token of this.tokens) {
            if (token.name === name) {
                return token
            }
        }

        return null
    }

    createToken(token: AuthToken): AuthToken {
        this.tokens.push(token)
        return token
    }
}