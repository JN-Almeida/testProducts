import React from 'react';
import ProductCard from '../../components/ProductCard';
import { products } from '../../assets/products';

import {Container} from './style'

const Home = () => (
  <Container>

    {products.map((product) => (
      <ProductCard product={product} key={product.id} />
    ))}
  </Container>
)

export default Home;