import React, { useEffect, useState } from 'react';
import SingleProduct from '../SingleProduct/SingleProduct';
import './AllProducts.css'

const AllProducts = (props) => {
    const [products, setProducts] = useState([])
    useEffect(() => {
        fetch('https://fakestoreapi.com/products')
            .then(res => res.json())
            .then(data => setProducts(data))
    }, [])
    return (
        <div>
            <h1 className='text-center'>My fake store</h1>
            <div className="row g-2 container mx-auto">
                {products.map(product => <SingleProduct
                    key={product.id}
                    product={product}
                    count={props.count}
                    setCount={props.setCount}
                ></SingleProduct>)}
            </div>
        </div>
    );
};

export default AllProducts;