import React, { useState, useEffect, Fragment } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import 'bootstrap/dist/css/bootstrap.css';
import { Formik, Field, Form, ErrorMessage, FieldArray, FormikProps } from 'formik';
import Table from 'react-bootstrap/Table'
import { Badge, Button, Col, Feedback, FormControl, FormGroup, FormLabel, InputGroup } from 'react-bootstrap';
import * as Yup from 'yup';
import './order.css';
import OrderService from './order-service';

const Order = () => {
    let saveRef;  //= React.createRef();
    let order = new OrderService();
    const data = useSelector(state => state.product.products_list);
    return (
        <div>
            <Formik
                initialValues={{ products_list: data }}
                onSubmit={(values, actions) => {
                    // setTimeout(() => {
                    // alert(JSON.stringify(values, null, 2));
                    order.save(values);
                    actions.setSubmitting(false);
                    // }, 1000);
                }}>{({ handleSubmit, handleChange, handleBlur, values, errors }) => (
                    <Form onSubmit={handleSubmit}>
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
                                                        <td><Button onClick={order.setFocus} variant="info" size="sm" block>{product.name}</Button></td>
                                                        <td>
                                                            <Field name={`prd_${index}`}>
                                                                {({
                                                                    field,
                                                                    form: { touched, errors },
                                                                    meta,
                                                                }) => (
                                                                        <div>
                                                                            <FormGroup controlId={`prd_${index}`}>
                                                                                <FormControl readOnly value={product.rate} type={'text'} size="sm" />
                                                                            </FormGroup>
                                                                        </div>
                                                                    )}
                                                            </Field>
                                                        </td>
                                                        <td>
                                                            <Field name={`qty_${index}`}>
                                                                {({
                                                                    field,
                                                                    form: { touched, errors },
                                                                    meta,
                                                                }) => (
                                                                        <div>
                                                                            <FormGroup controlId={`qty_${index}`}>
                                                                                <FormControl value={values.qty_0} onChange={handleChange} type={'text'} size="sm" />
                                                                            </FormGroup>
                                                                        </div>
                                                                    )}
                                                            </Field>
                                                        </td>
                                                        <td>
                                                            <Field name={`amt_${index}`}>
                                                                {({
                                                                    field,
                                                                    form: { touched, errors },
                                                                    meta,
                                                                }) => (
                                                                        <div>
                                                                            <FormGroup controlId={`amt_${index}`}>
                                                                                <FormControl readOnly value={0.00} type={'text'} size="sm" />
                                                                            </FormGroup>
                                                                        </div>
                                                                    )}
                                                            </Field>
                                                        </td>
                                                        <td><Button onClick={order.add} size="sm" block>Add</Button></td>
                                                        <td><Button onClick={order.remove} size="sm" block>Remove</Button></td>
                                                    </tr>
                                                ))}
                                        </tbody>
                                    </Table>
                                </div>
                            )}
                        />
                        <Button size="sm" type="submit">Submit</Button>
                    </Form>
                )}
            </Formik>
        </div>
    )
    // handleChange = event => {
    //     console.log("event.target.value");
    //       console.log(event.target.value);
    //   }
 }
export default Order