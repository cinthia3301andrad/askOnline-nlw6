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
            width: 80%;
            min-width: 50px;
            max-width: 320px;
        }
        strong {
            font: 700 2.5rem Ubuntu, sans-serif;
            line-height: 42px;
            margin-top: 16px;
            
        }
        p {
            font-size: 1.1rem;
            font-weight: 500;
            font-family: Nunito, sans-serif;
            line-height: 32px;
            margin-top: 10px;
            color: var(--gray-60);
        }
    }

    main {
        display: flex;
        justify-content: center;
        align-items: center;
        flex: 6;

        padding: 0 32px;
    }

`;


export const MainContent = styled.div`  
    display: flex;
    flex-direction: column;
    align-items: stretch;

    text-align: center;

    width: 100%;
    max-width: 320px;

    > img {
        align-self: center;
    }
    
    form {
        input {
            height: 50px;
            border-radius: 8px;
            padding: 0 16px;

            background: var(--white);
            border: 1px solid var(--gray-200);
        }

        button {
            margin-top: 16px;
        }

        button, input {
            width: 100%;
        }
    }
    .create-room {
        display: flex;
        justify-content: center;
        align-items: center;

        margin-top: 64px;
        height: 50px;
        border-radius:8px;
        font-weight: 500;
        background: #ea4335;
        color: var(--white);

        cursor: pointer;
        border: 0;
        
        transform: filter 0.5s;
        img {
            margin-right: 8px;
        }
        &:houver {
            filter: brightness(0.9);
        }
    }
    .separation {
        display: flex;
        align-items: center;

        font-size: 1.1rem;
        color: var(--gray-200);

        margin: 32px 0;
        &::before {
            content: '';
            flex: 1;
            height: 1px;
            background: var(--gray-200);
            margin-right: 16px;

        }
        &::after {
            content: '';
            flex: 1;
            height: 1px;
            background: var(--gray-200);
            margin-left: 16px;
        }
    }
`