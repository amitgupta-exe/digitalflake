import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';

import Category from './Category';
import AddNewCategory from "./AddNewCategory";

import LeftMenu from '../../components/LeftMenu';


import { getCategories } from '../../store/actions/categories';



const CategoriesPage = () => {
    const categories = useSelector((state) => state.c);
    const [currentId, setCurrentId] = useState(0);
    const dispatch = useDispatch();



    useEffect(() => {
        dispatch(getCategories());
    }, [currentId, dispatch]);

    return (


        <main className="container">

            <LeftMenu />

            <div className="page">


                <div className="products-grid">

                    {categories.map((product, index) => (

                        <Category key={index} product={product} setCurrentId={setCurrentId} />
                    ))}
                </div>
                <AddNewCategory currentId={currentId} setCurrentId={setCurrentId} />
            </div>

        </main>
    );
};

export default CategoriesPage;
