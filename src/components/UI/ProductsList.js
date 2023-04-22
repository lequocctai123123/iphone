import React from 'react';
import ProductsCard from './ProductsCard';



const ProductsList = ({data, index}) => {
  return (
    <>
      {data?.map((item, index)=>(
        <ProductsCard item={item} key={index} />
      ))}
    </>
  );
};

export default ProductsList;
//1:05:04