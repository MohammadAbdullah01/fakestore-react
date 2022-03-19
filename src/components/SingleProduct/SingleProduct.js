import React from 'react';
import Details from '../Details/Details';
import './SingleProduct.css'

const SingleProduct = ({ product, setCount, count }) => {
    console.log(setCount)
    const newCount = () => setCount(count + 1);

    return (
        <div className="col-4 text-center card">
            <h3>{product.title.slice(0, 10)}</h3>
            <img className='myImg' src={product.image} alt="" />
            <div className='d-flex justify-content-around my-3'>
                <button onClick={newCount} className='btn btn-primary'>Add cart</button>
                <Details product={product}></Details>
                <button className='btn btn-info'>Delete</button>
            </div>
        </div>

    )
};

export default SingleProduct;