export interface AuthToken {
    name: string
    token: string
}

export interface AuthTokenRepo {
    getTokens(): AuthToken[]
    getTokenByName(name: string): AuthToken | null
    createToken(token: AuthToken): AuthToken
}