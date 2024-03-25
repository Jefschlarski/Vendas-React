import { Input } from "antd"
import { Box, Title } from "./inputText.styles"

interface InputTextProps {
    title?: string
}

const TextInput = ({title}: InputTextProps) => {
    return (
        <Box>
            <Title>{title}</Title>
            <Input></Input>
        </Box>
    )
}

export default TextInput