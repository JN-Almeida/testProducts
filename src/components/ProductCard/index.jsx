import React, { useState } from 'react';

import { Container, ButtonAddToCart } from './style'; 

const ProductCard = ({productImg, productTitle, oldPrice, price, installmentCount, installmentPrice, whishList, cart}) => {
  const [whishListAdded, setWhishListAdded] = useState(whishList)
  const [addedToCart, setAddToCart] = useState(cart)

  return(
    <Container>
      <button class="buttonWishList" whishListAdded={whishListAdded}>
        <svg fill="none" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 26 23"><path d="M23.15 2.86a6.31 6.31 0 0 0-8.93 0L13 4.08l-1.22-1.22A6.3 6.3 0 0 0 1 7.34c0 1.68.67 3.29 1.85 4.48l1.22 1.22L13 22l8.93-8.96 1.22-1.22a6.34 6.34 0 0 0 0-8.96Z" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"/></svg>
      </button>
      <div class="productImg">
        <img src={productImg} />
      </div>
      <h3 class="productTitle">{productTitle}</h3>

      <span class="oldPrice">{oldPrice}</span>
      <span class="price"> {price} </span>
      <span class="installment">em até <b>{installmentCount}x de {installmentPrice}</b> sem juros</span>

      <ButtonAddToCart addedToCart={addedToCart}>
        {addedToCart ? <><img src="./check.png" /> ADICIONADO</> : 'ADICIONAR'}

      </ButtonAddToCart>
    </Container>
)};

export default ProductCard;
