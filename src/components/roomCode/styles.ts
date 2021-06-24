import styled from "styled-components";

export const ContainerRoomCode = styled.button`
    display: flex ;

    height: 40px;
    border-radius: 10px;
    overflow: hidden;

    background: var(--white);
    border: 1px solid var(--primary_02);
    cursor: pointer;

    div {
        display: flex;
        justify-content: center;
        align-items: center;
        background: var(--primary_02);
        padding: 0 12px;

    }
    span {
        display: block;
        align-self: center;
        flex: 1;
        padding: 0 16px 0 12px;

        width: 230px;
        font-size: 0.8rem;
        font-weight: 500;
    }

`