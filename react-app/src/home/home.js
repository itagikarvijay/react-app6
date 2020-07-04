import React, { useEffect } from "react";
import Header from './header'
import HandleError from '../error/HandleError'
import { useSelector, useDispatch } from 'react-redux'
import { setTitle } from '../actions/rootActions'
import ProductService from '../master/products/product-service'
import { setProductList } from '../actions/productAction';
import { Route, Link, BrowserRouter as Router, useRouteMatch } from 'react-router-dom';

const Home = (props) => {
    const title = useSelector(state => state.root.title);

    const dispatch = useDispatch();
    let product = new ProductService();

    useEffect(() => {
        dispatch({ type: 'SET_TITLE', payload: 'Title modifed' })
    }, [])

    useEffect(() => {
        console.log("productUseEffect fromHome" )
        product.getAll().then(data => {
            console.log(data);
            dispatch(setProductList(data))
        }, [])
    }, []);

    let { path, url } = useRouteMatch();

    return (
        <div>
            <Header />
            <Link to={`${url}/Order`}>Order</Link>
        </div>
    )
}
export default Home;