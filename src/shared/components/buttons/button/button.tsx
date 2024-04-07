import { ButtonProps, Button as AntdButton } from "antd"

interface Props extends ButtonProps {
    title: string,
    margin?: string 
}

/**
 * Generate a antd button component with specified margin, title, and additional props.
 *
 * @param {object} props - Object containing margin, title, and any additional props.
 * @return {React.ReactNode} The button component.
 */
const Button = ({margin, title, ...props}: Props): React.ReactNode => {
    return <AntdButton style={{ margin }} {...props}>{title}</AntdButton>
}
export default Button