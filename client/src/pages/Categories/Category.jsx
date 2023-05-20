import React from 'react';
import { useDispatch } from 'react-redux';
import { deleteCategory } from '../../store/actions/categories';

const Category = ({ product, setCurrentId }) => {
    const dispatch = useDispatch();

    return (
        <main>
            <div className='horizontal-ribbon-card'>
                <p className="id"></p>
                <p className="name">{product.name}</p>
                <p className="description">{product.description}</p>
                <p className="status">{product.status}</p>
                <p></p>
                <div className="options">

                    <button className='btn btn-dark' onClick={() => setCurrentId(product._id)}>Edit</button>
                    <button className='btn btn-danger' onClick={() => dispatch(deleteCategory(product._id))}> Delete</button>
                </div>
            </div>
        </main>
    )
}

export default Category