import { Image } from './styles';
import { Photo } from './types';


const PhotoComponent: React.FC<{photo: Photo}> = ({ photo }) => {
    return(
        <Image src={photo.urls.regular} alt={`${photo.alt_description}`} />
    )
}

export default PhotoComponent; 