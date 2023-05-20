import React from 'react'
import { useDispatch } from 'react-redux';
import { deleteProduct } from '../../store/actions/products';


const Product = ({ product, setCurrentId }) => {
    const dispatch = useDispatch();

    return (
        <main>
            <div className='horizontal-ribbon-card'>
                <p className="id"></p>
                <p className="name">{product.name}</p>
                <p className="description">{product.packSize}</p>
                <p className="status">{product.category}</p>
                <p className="status">{product.mrp}</p>
                <p className="status">{product.status}</p>

                <div className="options">
                    <button className='btn btn-dark' onClick={() => setCurrentId(product._id)}>Edit</button>
                    <button className='btn btn-danger' onClick={() => dispatch(deleteProduct(product._id))}> Delete</button>
                </div>
            </div>
        </main>
    )
}

export default Product