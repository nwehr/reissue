import { useState } from "react"
import { AuthToken } from "../../../core/entities/authtoken"
import { AuthTokenRepo } from "../../../repos/localstorage/tokenrepo"

export const useAuthTokens = () => {
    const [authTokens] = useState<AuthToken[]>((new AuthTokenRepo()).getTokens())

    return {
        authTokens
    }
}