import React from 'react';
import ProductCard from './components/ProductCard';
import GlobalStyles from './globalStyles';
import { products } from './assets/products';

const App = function () {
  console.log(products);
  return (
    <div className='App'>
      <GlobalStyles />
      {products.map((product) => {
          <ProductCard product={product} key={product.id} />;
        })}
    </div>
  );
};

export default App;
