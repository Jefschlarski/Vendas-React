import { Input, InputProps } from "antd"
import { Box, Title } from "./textInput.styles"

interface InputTextProps  extends InputProps {
    title?: string,
    height?: string,
    margin?: string
}

/**
 * Renders a text input component with a title and optional styling.
 *
 * @param {number} height - The height of the input component.
 * @param {string} margin - The margin of the input component.
 * @param {string} title - The title of the input component.
 * @param {...props} props - Additional props to be passed to the input component.
 * @return {JSX.Element} The rendered text input component.
 */
const TextInput = ({height, margin, title,  ...props}: InputTextProps) => {
    return (
        <Box style={{ margin }}>
            <Title>{title}</Title>
            <Input style={{ height }} {...props}></Input>
        </Box>
    )
}

export default TextInput