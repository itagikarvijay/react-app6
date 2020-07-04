import React, { useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import ProductService from './product-service';
import { setProductList } from '../../actions/productAction';

const Product = (prpos) => {

    const dispatch = useDispatch();
    let product = new ProductService();

    useEffect(() => {
        console.log("productUseEffect")
        product.getAll().then(data => {
            console.log(data);
            dispatch(setProductList(data))
        }, [])
    });

    return (
        <div>
            <p>Loading products</p>
        </div>
    )
}

export default Product;