import styled from "styled-components";

export const ContainerButton = styled.button`
  display: flex;
    justify-content: center;
    align-items: center;

    margin-top: 64px;
    height: 50px;
    border-radius:8px;
    font-weight: 500;
    background: var(--primary_02);
    color: var(--white);
    padding: 0  32px;

    cursor: pointer;
    border: 0;
        
    transform: filter 0.5s;
    img {
        margin-right: 8px;
    }
    &:not(:disabled):houver {
        filter: brightness(0.9);
    }
    &:disabled {
        opacity: 0.6;
        cursor: not-allowed;
    }
`