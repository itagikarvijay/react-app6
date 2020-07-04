import React, { useEffect } from "react";
import Header from './header'
import HandleError from '../error/HandleError'
import { useSelector, useDispatch } from 'react-redux'
import { setTitle } from '../actions/rootActions'
const Home = (props) => {
    const title = useSelector(state => state.root.title);

    const dispatch = useDispatch();

    useEffect(() => {
        dispatch({ type: 'SET_TITLE', payload: 'Title modifed' })
    }, [])

    return (
        <div>
            <HandleError></HandleError>
            <Header />
            <h1>
                Home page {title}
            </h1>
        </div>
    )
}
export default Home;

