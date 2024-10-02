import ReactDOM from "react-dom";
import { Photo as PhotoType } from "../Photo/types";
import { BlockDescription, CloseButton, CloseIcon, CreatedAt, Description, Modal, Overlay, Title } from "./styles";
import { useModal } from "../../hooks/useModal";
import Photo from "../Photo";
import { useRef } from "react";
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

interface PhotoDetailsProps {
    photo: PhotoType;
}

const PhotoDetails: React.FC<PhotoDetailsProps> = ({ photo }) => {
    const { isOpen, setIsOpen } = useModal();
    const overlayRef = useRef<null | HTMLDivElement>(null);
    const timelineRef = useRef<GSAPTimeline>(gsap.timeline());
    const closeButtonRef = useRef<null | HTMLButtonElement>(null)
    const descriptionBlockRef = useRef<null | HTMLDivElement>(null)
        
    useGSAP(() => {
        const info = descriptionBlockRef.current?.children;
        if(info) {
            if(!isOpen) {
                return;
            }
            timelineRef.current
                .to(overlayRef.current, {opacity: 1, duration: 0.5})
                .to(closeButtonRef.current, {scale: 1, ease: "bounce.out", duration: 0.5})
                .from(info, {stagger: 0.2, duration: 0.5, y:30, opacity: 0, ease: "power2.in"}, "<")
        }
    }, [isOpen]);

    return (
        ReactDOM.createPortal(
            <Overlay ref={overlayRef}>
                <Modal>
                    <CloseButton ref={closeButtonRef} onClick={() => {setIsOpen(false)}}>
                        <CloseIcon xmlns="http://www.w3.org/2000/svg" viewBox="0 0 384 512">
                            <path d="M342.6 150.6c12.5-12.5 12.5-32.8 0-45.3s-32.8-12.5-45.3 0L192 210.7 86.6 105.4c-12.5-12.5-32.8-12.5-45.3 0s-12.5 32.8 0 45.3L146.7 256 41.4 361.4c-12.5 12.5-12.5 32.8 0 45.3s32.8 12.5 45.3 0L192 301.3 297.4 406.6c12.5 12.5 32.8 12.5 45.3 0s12.5-32.8 0-45.3L237.3 256 342.6 150.6z"/>
                        </CloseIcon>
                    </CloseButton>
                    <Photo photo={photo} />
                    <BlockDescription ref={descriptionBlockRef}>
                        { photo.user && <Title>{photo.user.name}</Title>}
                        { photo.description && <Description>{photo.description}</Description> }
                        { photo.created_at && <CreatedAt>{new Date(photo.created_at).toLocaleDateString()}</CreatedAt> }
                    </BlockDescription>
                </Modal>
            </Overlay>,
            document.body
        )
    )
}

export default PhotoDetails;