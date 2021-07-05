import { FaGithub, FaGitlab, FaGitAlt } from "react-icons/fa"
import { SiGitea } from "react-icons/si"

export const withIcon = (message: string, schema: string) => {
    const icon = () => {
        switch (schema) {
            case "gitlab":
                return <FaGitlab />
            case "github":
                return <FaGithub />
            case "gitea":
                return <SiGitea />
            default:
                return <FaGitAlt />
        }
    }

    return <>
        {icon()}{" "}{message}
    </>
}