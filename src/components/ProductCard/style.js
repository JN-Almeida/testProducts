import styled from 'styled-components';

export const Container = styled.div`
  background-color: #ffffff;
  padding: 32px;
  border-radius: 8px;
  position: relative;
  display: flex;
  flex-direction: column;
  max-width: 305px;
  box-shadow: 0 0 0 5 #1c1c1c;
  margin-bottom: 30px;

  .productTitle {
    font-size: 14px;
    font-weight: 500;
    color: #1c1c1c;
    margin: 20px 0;
  }
  .oldPrice {
    font-size: 14px;
    color: #b5b5b6;
    text-decoration-line: line-through;
  }
  .price {
    color: #da4b4f;
    font-size: 20px;
    font-weight: 700;
  }
  .installment {
    font-size: 12px;
    font-weight: 500;
    color: #848587;
    b {
      color: #1c1c1c;
    }
  }

  .buttonWishList {
    background-color: #f2f3f6;
    border-radius: 100%;
    padding: 10px;
    width: 48px;
    height: 48px;
    transition: 0.5s ease-in-out;
    position: absolute;
    top: 30px;
    right: 30px;
    svg {
      stroke: #1c1c1c;
    }
    &:hover,
    &:focus,
    &:active {
      background-color: #fee5ec;
      svg {
        stroke: #da4b4f;
        fill: #fee5ec;
      }
    }
    ${({ whishListAdded }) =>
      whishListAdded &&
      `
            svg{
                fill: #DA4B4F;
                stroke: #DA4B4F;
            }
        `}
  }
`;

export const WishListButton = styled.button`
  background-color: #f2f3f6;
  border-radius: 100%;
  padding: 10px;
  width: 48px;
  height: 48px;
  transition: 0.5s ease-in-out;
  position: absolute;
  top: 30px;
  right: 30px;
  display: flex;
  justify-content: center;
  align-items: center;
  svg {
    stroke: #1c1c1c;
  }
  &:hover {
    background-color: #fee5ec;
    svg {
      stroke: #da4b4f;
      fill: #fee5ec;
    }
  }
  ${({ whishListAdded }) =>
    whishListAdded &&
    `
        background-color: #DA4B4F;
        svg{
            fill: #ffffff;
            stroke: inherit;
        }
        &:hover {
            background-color: #C22539;
            svg{
                fill: #ffffff;
                stroke: inherit;
            }
        }
    `}
`;

export const ButtonAddToCart = styled.button`
  color: #ffffff;
  background-color: #40b25c;
  border-radius: 5px;
  padding: 12px 24px;
  margin-top: 20px;
  transition: 0.5s ease-in-out;
  font-size: 16px;
  font-weight: 700;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10px;

  &:hover {
    background-color: #1c6c3e;
  }

  ${({ addedToCart }) =>
    addedToCart &&
    `
        background-color: #A3F9B9;
        color: #1C1C1C;
        &:hover {
            background-color: #A3F9B9;
        }
    `}
`;
