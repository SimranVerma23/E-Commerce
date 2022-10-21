import React from 'react';
import Product from './Product';


function ProductList({Products}){
  return(
<div className="sm:grid sm:grid-cols-2 md:grid-cols-3 gap-4 space-y-2 mx-auto">
  {Products.map(function(items){
  return(
    <Product
      key={items.title}
      {...items}
      />);
  })}
</div>
 ); 

}

export default ProductList;
