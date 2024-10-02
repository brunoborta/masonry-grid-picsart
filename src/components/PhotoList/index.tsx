import { useMemo, useRef } from "react";
import {Photo as PhotoType} from "../../components/Photo/types";
import Photo from "../Photo";
import { PhotoWrapper } from "./styles";
import { useLoader } from "../../hooks/useLoader";

interface PhotoListProps {
    photos: PhotoType[];
    handleModal: (photo: PhotoType) => void;
    setPage: React.Dispatch<React.SetStateAction<number>>
}

const PhotoList: React.FC<PhotoListProps> = ({ photos, handleModal, setPage }) => {
    const observer = useRef<IntersectionObserver | null>(null);
    const { isLoading } = useLoader(); 

    const lastImageElementRef = useMemo(() => {
        return (node: HTMLDivElement | null) => {
            if (isLoading) return;
            if (observer.current) observer.current.disconnect();
        
            observer.current = new IntersectionObserver((entries) => {
                if (entries[0].isIntersecting) {
                setPage((prevPage) => prevPage + 1);
                }
            });
        
            if (node) observer.current.observe(node);
        }
    }, [isLoading, setPage]);

    return (
        photos.map((image, index) => {
            if (photos.length === index + 1) {
                return (
                    <PhotoWrapper ref={lastImageElementRef} key={`${image.id}-${index}}`} onClick={() => handleModal(image)}>
                        <Photo photo={image} />
                    </PhotoWrapper>
                )
            }
            return (
                <PhotoWrapper key={`${image.id}-${index}}`} onClick={() => handleModal(image)}>
                    <Photo photo={image} />
                </PhotoWrapper>
            )
        })
    );
}

export default PhotoList;