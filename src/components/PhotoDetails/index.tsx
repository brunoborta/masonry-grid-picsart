import ReactDOM from "react-dom";
import { Photo as PhotoType } from "../Photo/types";
import { BlockDescription, CloseButton, CloseIcon, CreatedAt, Description, Modal, Overlay, Title } from "./styles";
import { useModal } from "../../hooks/useModal";
import Photo from "../Photo";
import { useEffect, useRef } from "react";

interface PhotoDetailsProps {
    isOpen: boolean;
    photo: PhotoType;
}

const PhotoDetails: React.FC<PhotoDetailsProps> = ({ photo }) => {
    const { isOpen, setIsOpen } = useModal();
    if(!isOpen) return null;
    return (
        ReactDOM.createPortal(
            <Overlay>
                <Modal>
                    <CloseButton onClick={() => {setIsOpen(false)}}>X</CloseButton>
                    <Photo photo={photo} />
                </Modal>
            </Overlay>,
            document.body
        )
    )
}

export default PhotoDetails;