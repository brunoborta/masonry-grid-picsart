import { useEffect, useMemo, useRef, useState } from "react";
import { Container } from "./styles";
import Photo from "../../components/Photo";
import { Photo as PhotoType } from "../../components/Photo/types";
import PhotoDetails from "../PhotoDetails";
import { useModal } from "../../hooks/useModal";

export const IMAGES_PER_PAGE = 15;
const Grid: React.FC = () => {
  const {isOpen, setIsOpen} = useModal()
  const [images, setImages] = useState<PhotoType[]>([]);
  const [page, setPage] = useState(1);
  const [selectedPhoto, setSelectedPhoto] = useState<PhotoType | null>(null);
  const [loading, setLoading] = useState(false);
  const observer = useRef<IntersectionObserver | null>(null);

  useEffect(() => {
    const fetchImages = async () => {
      setLoading(true);
      try {
        const response = await fetch(`https://api.unsplash.com/photos/?client_id=${import.meta.env.VITE_UNSPLASH_ACCESS_KEY}&page=${page}&per_page=${IMAGES_PER_PAGE}`);
        const data = await response.json();
        setImages(prevImages => [...prevImages, ...data]);
      } catch (error) {
       console.error(error);
      } finally {
        setLoading(false);
      }
    }

    fetchImages();
  }, [page]);

  const lastImageElementRef = useMemo(() => {
    return (node: HTMLDivElement | null) => {
      if (loading) return;
      if (observer.current) observer.current.disconnect();
  
      observer.current = new IntersectionObserver((entries) => {
        if (entries[0].isIntersecting) {
          setPage((prevPage) => prevPage + 1);
        }
      });
  
      if (node) observer.current.observe(node);
    }
  }, [loading]);

  return(
    <Container>
      {images.map((image, index) => {
        if (images.length === index + 1) {
          return <div ref={lastImageElementRef} onClick={() => {setIsOpen(true); setSelectedPhoto(image)}} key={`${image.id}-${index}-${new Date().getMilliseconds()}`}><Photo photo={image} /></div>
        } else {
          return <div onClick={() => {setIsOpen(true); setSelectedPhoto(image)}} key={image.id}><Photo photo={image} /></div>
        }
      })}
      {loading && <p>Loading...</p>}
      {isOpen && selectedPhoto && <PhotoDetails isOpen={isOpen} photo={selectedPhoto} />}
    </Container>
  )
}

export default Grid;
