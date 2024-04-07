import { ProductHeaderContainer } from "./header.styles"

export interface HeaderProps {
    title: string
    toolBar?: React.ReactNode
}

const Header = ({ title, toolBar }: HeaderProps) => {
    return (
        <ProductHeaderContainer>
            <h1>{title}</h1>
            {toolBar && <div>{toolBar}</div>}
        </ProductHeaderContainer>
    )
}

export default Header