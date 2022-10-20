import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import NoMatching from './NoMatching';
import { getProductList } from "./Api"
import Loading from "./Loading"
import Button from "./Button"



function ProductBox() {
  const [queary, setQueary] = useState('');
  const [sort, setSort] = useState('default');
  const [productList, setProductList] = useState([]);
  const [loading, setLoading]=useState(true);

  useEffect(function() {
    const xyz = getProductList();
    xyz.then(function(products) {
      console.log(products)
      setProductList(products);
      setLoading(false);

    });

  }, []);

  let data = productList.filter(function(items) {
    const LowerCaseName = items.title.toLowerCase();
    const LowerCaseQueary = queary.toLowerCase();
    return LowerCaseName.indexOf(LowerCaseQueary) != -1;
  });
  function HandleQuearyChange(event) {
    setQueary(event.target.value);
  }
  function HandleSortChange(event) {
    setSort(event.target.value);
  }

  if (sort == "title") {
    data.sort(function(x, y) {
      return x.title < y.title ? -1: 1;
    });
  }
  else if (sort == "lowPrice") {
    data.sort(function(x, y) {
      return x.price - y.price;
    });
  } else if (sort == "highPrice") {
    data.sort(function(x, y) {
      return y.price - x.price;
    });

  }
  if(loading){
    return <Loading/>
  }

  
  return (
    <div className="bg-white max-w-6xl px-2 sm:px-9 py-12 mx-auto shadow shadow-xl shadow-gray-700 my-10">
      <h1 className="text-4xl sm:text-5xl text-center sm:text-left font-bold text-primary-default mb-4 px-9">Shop</h1>
      <div className="p-5 flex flex-col items-center gap-2 sm:gap-0 sm:flex-row sm:justify-between sm:px-9 sm:py-10">
        <div>
          <SearchBar value={queary} onchange={HandleQuearyChange} />
        </div>
        <div>
          <select className="p-2 border border-2 border-gray-500 rounded-xl sm:text-xl" onChange={HandleSortChange} value={sort}>
            <option value="default">Default Sort</option>
            <option value="title">Sort by Title</option>
            <option value="lowPrice">Sort by Price:low to high</option>
            <option value="highPrice">Sort by Price:high to low</option>

          </select>
        </div>
      </div>
      <div className="px-9">
        {data.length > 0 && <ProductList Products={data}/>}
        {data.length == 0 && <NoMatching />}
      </div>
      <div className="flex gap-2 px-9 my-10">
      <Button>1</Button>
      <Button>2</Button>
      <Button>3</Button>

      </div>
    </div>
  );


}

export default ProductBox;
