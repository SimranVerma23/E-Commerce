import React, { useState, useEffect } from 'react';
import ProductList from './ProductList';
import SearchBar from './SearchBar';
import NoMatching from './NoMatching';
import { getProductList } from "./Api"
import Loading from "./Loading";
import { range} from 'lodash';
import { Link, useSearchParams } from 'react-router-dom';

function ProductBox() {
  const [productData, setProductData] = useState();
  const [loading, setLoading] = useState(true);
  
  const [searchParams, setSearchParams] = useSearchParams();
  const params = Object.fromEntries([...searchParams]);
  let { queary, sort, sortType, page } = params;

  queary = queary || "";
  sort = sort || "default"
  page = +page || 1

  useEffect(function () {
    let sortBy;
    let sortType;
    if (sort == "title") {
      sortBy ="title";
    }
    if (sort == "lowPrice") {
      sortBy ="price";
    }
    if (sort == "highPrice") {
      sortBy = "price";
      sortType = "desc";
    }
    getProductList(sortBy , sortType , queary ,page).then(function(response) {
     setProductData(response);
      setLoading(false);
    });
  }, [sort ,sortType ,queary , page]);

  function HandleQuearyChange(event) {
    setSearchParams({ ...params, queary: event.target.value, page: 1 }, {
      replace: false
    });
  }
  function HandleSortChange(event) {
    setSearchParams({ ...params, sort: event.target.value }, {
      replace: false
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
        {productData.data.length > 0 && <ProductList Products={productData.data}/>}
         {productData.data.length == 0 && <NoMatching />}
         </div>
      <div className="flex gap-2 px-9 my-10">
         {range(1, productData.meta.last_page + 1).map((pageNo) => (<Link key={pageNo} to={"?" + new URLSearchParams({ ...params, page: pageNo })}
           className={"px-4 py-2 m-2 " + (pageNo == page ? "bg-white text-red-600 border-2 border-red-600 " : "bg-red-600 text-white")}>{pageNo}
           </Link>
       ))}

      </div>
    </div>
  );


}


          //  className={"p-2 m-2 " + (pageNo === page ? " bg-white text-red-600 " : " bg-red-600 text-white")}>{pageNo}

export default ProductBox;
