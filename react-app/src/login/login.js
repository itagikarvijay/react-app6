import React, { Component } from "react";
import { Formik, Field, Form, ErrorMessage } from 'formik';
import * as Yup from "yup";
import { useHistory, withRouter } from "react-router-dom";
import LoginService from './login-service'
import { connect } from "react-redux";
import { setUser } from '../actions/rootActions'
import { setError  } from '../actions/errorActions'

import HandleError from "../error/HandleError";

const Login = (props) => {
    let history = useHistory();
    let loginService = new LoginService();
    const loginSchema = Yup.object().shape({
        userName: Yup.string()
            .required('Required'),
        password: Yup.string()
            .required('Required'),
    });
    return (
        <div className="container">
            <div className="col-md-6 offset-md-3 mt-5">
            
                <div className="card">
                    <h4 className="card-header">Login</h4>
                    <div className="card-body">
                        <Formik
                            initialValues={{ userName: 'RAVAN', password: 'pwd123' }}
                            validationSchema={loginSchema}
                            onSubmit={values => {
                                loginService.getUser(values.userName, values.password)
                                    .then(authenticatedUser => {
                                        if (authenticatedUser) {
                                     //       props.setError(new Error("Manually creted error.!"))
                                            props.setUser(authenticatedUser);
                                            history.push('/home');
                                        } else {
                                            props.setUser({});
                                            history.push('/login');
                                        }
                                    })
                            }}
                        >
                            {({ handleSubmit, errors, status, touched }) => (
                                <form className="baseForm" onSubmit={handleSubmit}>
                                    <div className="form-group">
                                        <label htmlFor="userName">User</label>
                                        <Field placeholder="Enter user name" name="userName" type="text" className="form-control" />
                                        <ErrorMessage name="userName" component="div" className="invalid-feedback" />
                                    </div>
                                    <div className="form-group">
                                        <label htmlFor="password">Password</label>
                                        <Field placeholder="password" name="password" type="password" className="form-control" />
                                        <ErrorMessage name="password" component="div" className="invalid-feedback" />
                                    </div>
                                    <button type="submit" className="btn btn-primary">
                                        Login
                                        </button >
                                </form >
                            )}
                        </Formik>
                    </div >
                </div >
            </div >
        </div>
    )
}
const mapDispatchToProps = (dispatch) => {
    return {
        setUser: (user) => { dispatch(setUser(user)) }
    //    setError: (error) => {dispatch(setError(error))}
    }
}

export default connect(null, mapDispatchToProps)(Login);