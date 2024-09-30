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
`;

export const Modal = styled.div`
    width: 90%;
    height: 90%;
`;

export const CloseButton = styled.button`
    position: absolute;
    top: 1rem;
    right: 1rem;
    background-color: transparent;
    border: none;
    cursor: pointer;
`;
