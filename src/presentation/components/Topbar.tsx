import { useAuth0 } from "@auth0/auth0-react";
import { Button } from "react-bootstrap"

const Topbar = () => {
    const { user, isAuthenticated, loginWithRedirect, logout, getIdTokenClaims } = useAuth0();

    const claims = getIdTokenClaims()
    claims.then((value) => {
        console.log("token")
        console.log(value)
    })

    return <div className="topbar">
        {
            isAuthenticated
                ? <Button style={{ float: "right" }} onClick={() => logout()}>Logout</Button>
                : <Button style={{ float: "right" }} onClick={() => loginWithRedirect()}>Login</Button>
        }

        {
            isAuthenticated
                ? <>
                    {
                        user?.picture
                            ? <img src={user?.picture} alt="Profile" className="profile-picture" />
                            : null
                    }
                    <p className="greeting">Welcome, {user?.name}</p>
                </>
                : null
        }
    </div >
}

export default Topbar