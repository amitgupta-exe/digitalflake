import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Product from './Product';
import AddNewProduct from "./AddNewProduct";

import LeftMenu from '../../components/LeftMenu';



import { getProducts } from '../../store/actions/products';



const ProductsPage = () => {
  const products = useSelector((state) => state.p);
  const [currentId, setCurrentId] = useState(0);
  const dispatch = useDispatch();


  useEffect(() => {
    dispatch(getProducts());
  }, [currentId, dispatch]);

  return (
    // !products.length ? <main className="products-container"><h1>LOADING . . . . . . . </h1></main> : (

    <main className="container">

      <LeftMenu />

      <div className="page">
        <div className="products-grid">

          {products.map((product, index) => (

            <Product key={index} product={product} setCurrentId={setCurrentId} />
          ))}
        </div>
        <AddNewProduct currentId={currentId} setCurrentId={setCurrentId} />

      </div >
    </main>

    // )
  );
};

export default ProductsPage;
