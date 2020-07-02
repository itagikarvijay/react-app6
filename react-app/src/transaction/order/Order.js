import React, { useState, useEffect } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { Formik, Field, Form, ErrorMessage, FieldArray } from 'formik';
import useFetch from 'use-http'
import Table from 'react-bootstrap/Table'
import { Badge, Button, Col, Feedback, FormControl, FormGroup, FormLabel, InputGroup } from 'react-bootstrap';
import * as Yup from 'yup';
import './order.css';
import OrderService from './order-service';

const Order = () => {
    let order = new OrderService();
    const data = useSelector(state => state.product.products_list);
    return (
        <div>
            <Formik
                initialValues={{ products_list: data }}
                onSubmit={values => {
                }}
                render={({ values, errors, touched, handleReset }) => {
                    return (
                        <Form>
                            <FieldArray
                                name="products_list"
                                render={({ insert, remove, push }) => (
                                    <div className="maxWidth d-flex justify-content-center">
                                        <Table size="sm">
                                            <thead>
                                                <tr>
                                                    <th>Product</th>
                                                    <th>Rate</th>
                                                    <th>Quantity</th>
                                                    <th>Amount</th>
                                                    <th>Add</th>
                                                    <th>Remove</th>
                                                </tr>
                                            </thead>
                                            <tbody>
                                                {values.products_list.length > 0 &&
                                                    values.products_list.map((product, index) => (
                                                        <tr key={index}>
                                                            <td><Button onClick={order.setFocus()} variant="info" size="sm" block>{product.name}</Button></td>
                                                            <td>
                                                                {/* <Field readOnly className="text-width" name={`products_list.${index}.rate`} size="sm" /> */}
                                                                <Field name={`prd_${index}`} 
                                                                    render={({ field, form: { touched, errors } }) => (
                                                                        <FormGroup controlId={`prd_${index}`}>
                                                                            <FormControl readOnly value={product.rate} type={'text'} size="sm" />
                                                                        </FormGroup>
                                                                    )}
                                                                />
                                                            </td>
                                                            <td>
                                                                <Field name={`qty_${index}`}
                                                                    render={({ field, form: { touched, errors } }) => (
                                                                        <FormGroup controlId={`qty_${index}`}>
                                                                            <FormControl type={'text'} size="sm" />
                                                                        </FormGroup>
                                                                    )}
                                                                />
                                                            </td>
                                                            <td><Field name={`amt_${index}`}
                                                                render={({ field, form: { touched, errors } }) => (
                                                                    <FormGroup controlId={`amt_${index}`}>
                                                                        <FormControl readOnly value={0.00} type={'text'} size="sm" />
                                                                    </FormGroup>
                                                                )}
                                                            />
                                                            </td>
                                                            <td><Button size="sm" block>Add</Button></td>
                                                            <td><Button size="sm" block>Remove</Button></td>
                                                        </tr>
                                                    ))}
                                            </tbody>
                                        </Table>
                                    </div>
                                )}
                            />
                            <br />
                            <Button variant="primary" type="submit">Submit</Button>
                        </Form>
                    );
                }}
            />
        </div>
    )
}
export default Order