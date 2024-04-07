import ImageTile from "../../../shared/components/image/imageTile"
import Tooltip from "../../../shared/components/tooltip/Tooltip"
import { Product } from "../types/Product"

interface TooltipImageProps {
    product: Product
}
const TooltipImage = ({ product }: TooltipImageProps) => {

    return (
        <Tooltip tooltip={ImageTile({ size: 100, imageUrl: product.image })}>
            <span>{product.name}</span>
        </Tooltip>
    )
}

export default TooltipImage