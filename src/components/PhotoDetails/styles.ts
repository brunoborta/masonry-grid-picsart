import styled from 'styled-components';

export const Overlay = styled.div`
    position: fixed;
    top: 0;
    left: 0;
    right: 0;

    background-color: rgba(0, 0, 0, 0.8);
    display: flex;
    align-items: center;
    justify-content: center;
    width: 100%;
    height: 100%;
    z-index: 999;

    backdrop-filter: blur(5px) grayscale(80%);
    opacity: 0;
`;

export const Modal = styled.div`
    position: relative;
    height: 100%;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: white;
    padding: 0.5rem;
    border-radius: 50%;
    border: none;
    cursor: pointer;

    display: flex;
    align-items: center;
    scale: 0;
`;

export const CloseIcon = styled.svg`
    width: 1.5rem;
    height: 1.5rem;
`;

export const BlockDescription = styled.div`
    position: absolute;
    bottom: 1rem;
    right: 1rem;
    display: flex;
    flex-direction: column;
    gap: 0.2rem;
`;
export const Title = styled.h2`
    font-size: 1.5rem;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    padding: 0.5rem;
`;

export const Description = styled.p`
    font-size: 1rem;
    background-color: rgba(0, 0, 0, 0.4);
    color: #fff;
    padding: 0.5rem;
`;

export const CreatedAt = styled(Description)`
    font-size: 0.8rem;
`;
