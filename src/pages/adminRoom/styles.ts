import styled from "styled-components";

export const ContainerRoom = styled.section`
    header {
        padding: 24px;
        border-bottom: 2px solid var(--gray-100);
    }

    .content {
        display: flex;
        justify-content: space-between;
        align-items: center;

        max-width: 1120px;
        margin: 0  auto;

        >img {
            max-height: 45px;
        }
        > div {
            display: flex;
            gap: 16px;
            button {
                height: 40px;
            }
        }

    }

    main {
        max-width: 800px;
        margin: 0 auto;
        padding: 0 15px;

        .room-title {
            margin: 32px 0 24px;
            display: flex;
            align-items: center;


            h1 {
                font-family: Nunito, sans-serif;
                font-size: 1.8rem;

                color: var(--primary_04);

            }

            span {
                margin-left: 16px;
                background: var( --pink-01);
                border-radius: 999px;

                padding: 8px 16px;
                color: var(--white);
                font-weight: 500;
                font-size: 0.9rem;
                
            }
        }

        form {
            textarea {
                width: 100%;
                border: 0;
                padding: 16px;
                border-radius: 8px;
                background: var(--white);
                box-shadow: 0px 1px 3px rgba(0, 0, 0, 0.09);

                resize: vertical;
                min-height: 130px;
            }

            .form-footer {
                display: flex;
                justify-content: space-between;
                align-items: center;

                margin-top: 16px;

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
                        color: var(--gray-800);
                        font-weight: 500;
                        font-size: 1rem;
                    }
                }

                >span {
                    font-size: 0.9rem;
                    color: var(--gray-500);
                    font-weight: 500;
                    button {
                        background: transparent;
                        border: 0;
                        color: var(--primary_002);

                        text-decoration: underline;
                        font-size: 0.9rem;
                        font-weight: 500;
                        cursor: pointer;
                    }
                }
                

            }
        }
        .question-list {
            margin-top: 35px;
        }
    }
`