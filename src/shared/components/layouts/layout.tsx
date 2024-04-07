import Breadcrumb, { BreadcrumbItem } from "../breadcrumb/Breadcrumb"
import { LayoutContainer } from "./layout.style"

interface LayoutProps {
    children: React.ReactNode
    breadcrumbItems?: BreadcrumbItem[];
}

const Layout = ({ children, breadcrumbItems }: LayoutProps) => {
    return (
        <LayoutContainer>
            {breadcrumbItems && <Breadcrumb breadcrumbItems={breadcrumbItems} />}
            {children}
        </LayoutContainer>
    )
}

export default Layout