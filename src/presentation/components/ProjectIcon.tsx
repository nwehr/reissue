import { FaGithub, FaGitlab, FaGitAlt } from "react-icons/fa"
import { SiGitea } from "react-icons/si"

interface ProjectIconProps {
    schema: string
}

const ProjectIcon = (props: ProjectIconProps) => {
    switch (props.schema) {
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

export default ProjectIcon