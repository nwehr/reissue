export interface AuthToken {
    name: string
    token: string
}

export interface IAuthTokenRepo {
    getTokens(): AuthToken[]
    getTokenByName(name: string): AuthToken | null
    createToken(token: AuthToken): AuthToken
}