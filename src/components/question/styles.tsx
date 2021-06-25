import styled from "styled-components";

export const ContainerQuestion = styled.section`
    background: var(--white);
    border-radius: 8px;
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0,04);
    padding: 24px;

    margin-bottom: 10px;
    p {
        color: var(--gray-800)
    }

    footer {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 24px;
        .user-info {
        display: flex;
        align-items: center;

        img {
            width: 32px;
            height: 32px;
            border-radius: 50%;
        }

        span {
            margin-left: 8px;
            color: var(--gray-200);
           
            font-size: 1rem;
        }
    }
    button {
        border:0;
        background: transparent;
        cursor: pointer;
        
        gap: 5px;

        &.like-button {
            display: flex;
            align-items: flex-end;
            color: var(--gray-200);

            span {
                font-size: 0.9rem;
            }
            svg {
                width: 20px;
                height: 20px;
            }

            &.liked {
                color: var(--primary_002);
             
                svg path {
                    
                    stroke: var(--primary_002);
                }
            }
        }
    }
}
   
`