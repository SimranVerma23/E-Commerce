import React, { useEffect ,useState } from 'react';
import { getProductData } from './Api';
import CartList from './CartList';
import Loading from './Loading';

function CartPage({ cart, updateCart}) {
  
  const [product, setProduct] = useState([]);
  const [loading, setLoading] = useState(true);

   useEffect(function () {
    const promises = Object.keys(cart).map(function (id) {
      return getProductData(id)
    });

    const badiPromise = Promise.all(promises);
    badiPromise.then(function (product) {
      setProduct(product);
      setLoading(false);
    })
   }, [cart]);
  
  if (loading) {
    return <Loading/>
  } 
 


  return (
    <div className="bg-white max-w-6xl mx-auto my-10">
      < CartList product={product} updateCart={updateCart} cart={cart} setLoading={setLoading} />
    </div>
  );

}

export default CartPage;
