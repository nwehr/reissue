import React, { useState } from "react"
import { Form, Button } from "react-bootstrap"
import { AuthToken } from "../../core/entities/authtoken"
import { useAuthTokens } from "./hooks/authtokens"

interface AuthTokenSelectProps {
    authToken: AuthToken
    onSelectAuthToken: (authToken: AuthToken) => void
}

const AuthTokenSelect = (props: AuthTokenSelectProps) => {
    const { authToken } = props
    const { authTokens } = useAuthTokens()
    const [showTokenFields, setShowTokenFields] = useState(false)

    const handleSelectToken = (e: React.ChangeEvent<HTMLSelectElement>) => {
        const name = e.currentTarget.value
        
        if (name === "New token...") {
            setShowTokenFields(true)
        }

        props.onSelectAuthToken(tokenByName(name, authTokens))
    }

    const handleChangeName = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onSelectAuthToken({ ...authToken, name: e.currentTarget.value })
    }

    const handleChangeToken = (e: React.ChangeEvent<HTMLInputElement>) => {
        props.onSelectAuthToken({ ...authToken, token: e.currentTarget.value })
    }

    return <Form.Group controlId="formAuthToken">
        <Form.Label>Personal Auth Token</Form.Label>
        {
            showTokenFields || !authTokens.length
                ? <>
                    <Form.Control placeholder="Token name (e.g. github_token)" value={authToken.name} onChange={handleChangeName} style={{ marginBottom: "1em" }} />
                    <Form.Control placeholder="Token value" value={authToken.token} onChange={handleChangeToken} style={{ marginBottom: "1em" }} />
                    <Button onClick={() => setShowTokenFields(false)} size="sm" disabled={!authTokens.length}>Select from list</Button>
                </>
                : <Form.Control as="select" value={authToken.name} onChange={handleSelectToken}>
                    <option value="" disabled>Please Choose...</option>
                    {
                        [...authTokens, { name: "New token...", token: "" }].map((token: AuthToken) => {
                            return <option key={token.name} value={token.name}>{token.name}</option>
                        })
                    }
                </Form.Control>
        }
        <Form.Text style={{ color: "gray" }}>See <a href="https://docs.github.com/en/github/authenticating-to-github/keeping-your-account-and-data-secure/creating-a-personal-access-token" target="_blank" rel="noreferrer">docs</a> on creating a personal access token.</Form.Text>
    </Form.Group>
}

const tokenByName = (name: string, tokenList: AuthToken[]): AuthToken => {
    for (let token of tokenList) {
        if (token.name === name) {
            return token
        }
    }

    return { name: "", token: "" }
}

export default AuthTokenSelect