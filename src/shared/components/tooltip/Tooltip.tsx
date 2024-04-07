import { ContainerTooltip, ExpandedTooltip } from "./tooltip.style"

interface TolltipProps {
    tooltip: React.ReactNode
    children: React.ReactNode
}

const Tooltip = ({ children , tooltip }: TolltipProps) => {

    return (
        <ContainerTooltip>
            <ExpandedTooltip>
                {tooltip}
            </ExpandedTooltip>
            {children}
        </ContainerTooltip>
    )
}

export default Tooltip