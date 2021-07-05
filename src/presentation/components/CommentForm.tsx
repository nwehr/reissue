import { useState } from "react"
import { Form, Button } from "react-bootstrap"

interface CommentFormProps {
    onSubmitComment: (body: string) => void
}

const CommentForm = (props: CommentFormProps) => {
    const [body, setBody] = useState<string>("")

    const handleSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
        e.preventDefault()
        await props.onSubmitComment(body)
        setBody("")
    }

    const handleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setBody(e.currentTarget.value)
    }

    return <Form onSubmit={handleSubmit}>
        <Form.Group>
            <Form.Control style={{ margin: "0 0 1em 0" }} as="textarea" placeholder="Leave a comment." value={body} onChange={handleChange} />
            
            <Button type="submit" size="sm">
                Comment
            </Button>
        </Form.Group>
    </Form>
}

export default CommentForm