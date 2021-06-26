import styled, { css } from "styled-components";


interface ContainerProps {
    isAnswered: boolean;
    isHighlighted: boolean;
}
export const ContainerQuestion = styled.section<ContainerProps>`
    background: ${props => (props.isHighlighted ? '#e8faffc1' : '#FFFF')};
    border: ${props => (props.isHighlighted ? '1.5px solid #73B1F7' : 0)};
    box-shadow: 0 2px 12px rgba(0, 0, 0, 0,04);
    padding: 24px;
    border-radius: 10px;
    margin-bottom: 10px;

    transform: translate(0%);
    transition: 0.2s ease-out;
    ${props => props.isHighlighted && css`
    background: '#eefafd';
    &:hover {
        -webkit-transform: scale(1.02);
        -ms-transform: scale(1.02);
        transform: scale(1.02);
    }
  `}

  ${props => props.isAnswered && css`
    background: #d4d4d4;
    border: 0;
  `}

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

        > div {
            display: flex;
            gap: 16px;
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