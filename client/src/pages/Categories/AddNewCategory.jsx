import React, { useState, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import FileBase from 'react-file-base64';
import { createCategory, updateCategory } from '../../store/actions/categories';

const Form = ({ currentId, setCurrentId }) => {

    const [categoryData, setCategoryData] = useState({ name: '', description: '', status: '' });
    const category = useSelector((state) => (currentId ? state.c.find((message) => message._id === currentId) : null));
    const dispatch = useDispatch();


    useEffect(() => {
        if (category) setCategoryData(category);
    }, [category]);

    const clear = () => {
        setCurrentId(0);
        setCategoryData({ name: '', description: '', status: '' });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();

        if (currentId === 0) {
            dispatch(createCategory(categoryData));
            console.log(categoryData);
            clear();
        } else {
            dispatch(updateCategory(currentId, categoryData));
            clear();
        }
    };

    return (
        <main className="form-container">
            <form autoComplete="off" noValidate onSubmit={handleSubmit}>

                <p> {currentId ? `Editing "${category.name}"` : 'Add a Product'} </p>

                <div className="form-group">
                    <label htmlFor="">Name</label>
                    <input className='form-control' value={categoryData.name} placeholder='Name' type="text" name="title" id="" onChange={(e) => setCategoryData({ ...categoryData, name: e.target.value })} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Description</label>
                    <input className='form-control' value={categoryData.description} placeholder='Description' type="text" name="description" id="" onChange={(e) => setCategoryData({ ...categoryData, description: e.target.value })} />
                </div>

                <div className="form-group">
                    <label htmlFor="">Status</label>
                    <input className='form-control' value={categoryData.status} placeholder='Price' type="text" name="price" id="" onChange={(e) => setCategoryData({ ...categoryData, status: e.target.value })} />
                </div>

                <button className='btn btn-primary' type="submit">Submit</button>
                <button className='btn btn-secondary' onClick={clear}>Clear</button>

            </form>
        </main>
    );
};

export default Form;
