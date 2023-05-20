import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
// import { createCategory, updateCategory } from '../../store/actions/categories';
import { createProduct, updateProduct } from '../../store/api';

const Form = ({ currentId, setCurrentId }) => {

    const [productData, setProductData] = useState({ name: '', packSize: '', category: '', mrp: '', image: '', status: '' });
    const product = useSelector((state) => (currentId ? state.p.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();


    useEffect(() => {
        if (product) setProductData(product);
    }, [product]);

    const clear = () => {
        setCurrentId(0);
        setProductData({ name: '', packSize: '', category: '', mrp: '', image: '', status: '' });
    };

    const handleSubmit = async  (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createProduct(productData));
            clear();
        } else {
            dispatch(updateProduct(currentId, productData));
            clear();
        }
    };

    return (
        <main className="form-container">
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>

                <p> {currentId ? `Editing "${product.title}"` : 'Add a Product'} </p>

                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input className='form-control' value={productData.name} placeholder='Name' type="text" name="title" id="" onChange={(e) => setProductData({ ...productData, name: e.target.value })} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Pack Size</label>
                    <input className='form-control' value={productData.packSize} placeholder='Description' type="text" name="description" id="" onChange={(e) => setProductData({ ...productData, packSize: e.target.value })} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Category</label>
                    <input className='form-control' value={productData.category} placeholder='Price' type="text" name="price" id="" onChange={(e) => setProductData({ ...productData, category: e.target.value })} />
                </div>

                <div className="form-group">
                    <label htmlFor="">MRP</label>
                    <input className='form-control' value={productData.mrp} placeholder='Price' type="text" name="price" id="" onChange={(e) => setProductData({ ...productData, mrp: e.target.value })} />
                </div>
                <div>
                    <FileBase className="form-control" type="file" multiple={false} onDone={({ base64 }) => setProductData({ ...productData, image: base64 })} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Status</label>
                    <input className='form-control' value={productData.status} placeholder='Price' type="text" name="price" id="" onChange={(e) => setProductData({ ...productData, status: e.target.value })} />
                </div>

                <button className='btn btn-primary' type="submit">Submit</button>
                <button className='btn btn-secondary' onClick={clear}>Clear</button>
                
            </form>
        </main>
    );
};

export default Form;
