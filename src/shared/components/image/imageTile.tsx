import { Image } from 'antd';

export type ImageTileProps = {
    size: number
    imageUrl: string
}

const ImageTile = (props: ImageTileProps) => {
    return (
        <Image
            height={props.size}
            src={props.imageUrl} 
        />
    )        
}

export default ImageTile;