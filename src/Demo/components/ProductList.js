import React from 'react';
import UseFetch from '../../customhooks/UseFetch';

const ProductList = () => {
  const { data: products, loading } = UseFetch('https://dummyjson.com/products');

  

  return (
    <div>
      <h2>Product List</h2>
      <hr />
      {products.map((item) => (
        <div key={item.id} style={{ border: '1px solid gray', padding: '10px', margin: '10px 0' }}>
          <img src={item.thumbnail} alt={item.title} width="200" />
          <h3>Title: {item.title}</h3>
          <p>Description: {item.description}</p>
          <p>Price: ₹{item.price}</p>
        </div>
      ))}
    </div>
  );
};

export default ProductList;
