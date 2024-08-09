import { Fragment, useEffect, useState } from "react";
import ProductCard from "../Components/ProductCard";
import { useSearchParams } from "react-router-dom";

export default function Home() {
  const [products, setProducts] = useState([]);
  const [searchParams,setSearchParams]=useSearchParams();
  // console.log(searchParams.values().next().value);
  // searchParams only takes the value of starting from keyword attribute
  // ? is must put after the main url it doesnt put it will make an error
  useEffect(()=>{
     fetch(process.env.REACT_APP_API_URL+'/products?'+searchParams)
     .then(res=>res.json())
     .then(res=>setProducts(res.products));
  },[searchParams]);
// console.log(process.env.REACT_APP_API_URL+'/products?'+searchParams);  //     http://localhost:8000/api/v1/products?keyword=shoes

  return (
    <Fragment>
      <h1 id="products_heading">Latest Products</h1>

      <section id="products" className="container mt-5">
        <div className="row">
          {
            //we pass the array of objects to the ProductCard Component as a props and definitely we can give the props name in ProductCard Component in {} because array is also an object type in JavaScript
            products.map((p,index)=><ProductCard key={index} product={p}/>)
          }
        </div>
      </section>
    </Fragment>
  );
}
