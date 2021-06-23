import styled from "styled-components";

export const ContainerHome = styled.section`
    display: flex;
    align-items: stretch;

    height: 100vh;

    aside {
        display: flex;
        flex-direction: column;
        justify-content: center;

        padding: 120px 80px;
        flex: 7;

        background: var(--primary_02);
        color: var(--white);
        img {
            max-width: 320px;
        }
    }

    main {
        flex: 6;
    }

`;