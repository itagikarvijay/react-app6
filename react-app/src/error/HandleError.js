import React, { Component } from 'react';
import { ErrorBoundry } from './ErrorBoundary'

export default class HandleError extends Component {

    constructor(props) {
        super(props);
    }

    render() {
        return (
            < div >
               Error handled
                {/* <ErrorBoundary /> */}
            </div >
        )
    }
}
