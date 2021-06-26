import styled from "styled-components";

interface ContainerProps {
    isOutlined: boolean;
}
export const ContainerButton = styled.button<ContainerProps>`
    display: flex;
    justify-content: center;
    align-items: center;

    height: 45px;
    border-radius:8px;
    font-weight: 600;
 
    background: ${props => (props.isOutlined ? '#FFF' : '#73B1F7')};
    border: ${props => (props.isOutlined ? '1px solid #73B1F7' : 0)};
    color: ${props => (props.isOutlined ? '#73B1F7' : '#fff')};
    padding: 0  32px;

    cursor: pointer;

        
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