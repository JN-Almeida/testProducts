import styled from "styled-components";

export const Container = styled.div`
    background-color: #ffffff;
    padding: 32px;
    border-radius: 8px;
    border: solid #000 2px;
    position: relative;
    display: flex;
    flex-direction: column;
    max-width: 305px;

    .productTitle{
        font-size: 14px;
        font-weight: 500;
        color: #1C1C1C;
        margin: 20px 0;
    }
    .oldPrice{
        font-size: 14px;
        color: #B5B5B6;
        text-decoration-line: line-through;
    }
    .price{
        color: #DA4B4F;
        font-size: 20px;
        font-weight: 700;
    }
    .installment{
        font-size: 12px;
        font-weight: 500;
        color: #848587;
        b{
            color: #1C1C1C;
        }
    }

    .buttonWishList {
        background-color: #F2F3F6;
        border-radius: 100%;
        padding: 10px;
        width: 48px;
        height: 48px;
        transition: .5s ease-in-out;
        position: absolute;
        top: 30px;
        right: 30px;
        svg{
            stroke: #1C1C1C;
        }
        &:hover, &:focus, &:active{
            background-color: #FEE5EC;
            svg{
                stroke: #DA4B4F;
                fill: #FEE5EC;
            }
        }
        
    }
`;

export const ButtonAddToCart = styled.button`
    color: #ffffff;
    background-color: #40B25C;
    border-radius: 5px;
    padding: 12px 24px;
    margin-top: 20px;
    transition: .5s ease-in-out;
    font-size: 16px;
    font-weight: 700;
    display: flex;
    align-items: center;
    justify-content: center;
    gap: 10px;
    
    &:hover, &:focus, &:active {
        background-color: #1C6C3E;
    }

    ${({addedToCart}) => addedToCart && `
        background-color: #A3F9B9;
        color: #1C1C1C;
    `}
`;
