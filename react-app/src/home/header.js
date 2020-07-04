import React, { Component } from 'react';
import { connect } from "react-redux";

const Header = (props) => {
    return (
        <div>
            <div className="container-fluid p-3 my-3 bg-primary text-white" >
                <div className="row d-flex justify-content-between">
                    <div className="col">
                        Welcome: {props.user.firstName}
                    </div>
                    <div className="col">
                    </div>
                    <div className="col">
                        <button type="button" className="btn btn-outline-dark btn-sm">
                            <span className="text-center text-white align-top font-weight-bold">Logout</span>
                        </button>
                    </div>
                </div >

            </div>
        </div>
    );
}

const mapStateToProps = (state) => {
    return {
        title: state.title,
        user: JSON.parse(state.root.user)
    };
}

export default connect(mapStateToProps, null)(Header)