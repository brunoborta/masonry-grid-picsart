import { Image } from './styles';
type Photo = {
  id: number;
  urls: { regular: string; };
  color: string | null;
  user: {
    username: string;
    name: string;
  };
};

const PhotoComponent: React.FC<{photo: Photo}> = ({ photo }) => {
    return(
        <Image src={photo.urls.regular} alt={`Photo of ${photo.user.username}`} />
    )
}

export default PhotoComponent; 