import { useEffect, useState } from "react";
import { Container } from "./styles";
import { Photo as PhotoType } from "../../components/Photo/types";
import PhotoDetails from "../PhotoDetails";
import { useModal } from "../../hooks/useModal";
import ScrollLock from "react-scrolllock";
import PhotoList from "../PhotoList";
import { useLoader } from "../../hooks/useLoader";
import { useKeyDown } from "../../hooks/useKeyDown";

export const IMAGES_PER_PAGE = 15;
const Grid: React.FC = () => {
  const {isOpen, setIsOpen} = useModal()
  const {isLoading, setLoading} = useLoader();
  const [photos, setPhotos] = useState<PhotoType[]>([]);
  const [page, setPage] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoType | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.unsplash.com/photos/?client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}&page=${page}&per_page=${IMAGES_PER_PAGE}`);
        const data = await response.json();
        setPhotos(prevPhotos => [...prevPhotos, ...data]);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [page, setLoading]); 

  const handleModal = (image: PhotoType) => {
    setIsOpen(true);
    setSelectedPhoto(image);
  }

  useKeyDown('Escape', () => setIsOpen(false));

  return(
    <ScrollLock isActive={isOpen}>
      <Container>
        <PhotoList photos={photos} handleModal={handleModal} setPage={setPage} />      
        {isLoading && <p>Loading...</p>}
        {isOpen && selectedPhoto && <PhotoDetails photo={selectedPhoto} />}
      </Container>
    </ScrollLock>
  )
}

export default Grid;
