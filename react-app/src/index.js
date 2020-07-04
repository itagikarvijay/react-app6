import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux'
import 'bootstrap/dist/css/bootstrap.css';
import './index.css';
import App from './App';
import store from './store/store'
// import * as registerServiceWorker from './registerServiceWorker';
import { Route, Link, BrowserRouter as Router } from 'react-router-dom';
import Login from './login/login';
import Home from './home/home'
import Order from './transaction/order/Order'
 // import { ErrorBoundry, ErrorBoundary } from './error/ErrorBoundary'

const routing = (
    <Router>
        <div>
            {
                <ul>
                    <li>
                        <Link to="/App">Home</Link>
                    </li>
                    <li>
                        <Link to="/login">Login</Link>
                    </li>
                </ul>
            }
            <Route exact path="/" component={App} />
            <Route e path="/login" component={Login} />
            <Route path="/home" component={Home} /> 
            <Route path="/home/Order" component={Order} />
        </div>
    </Router>
)

ReactDOM.render(
    <Provider store={store}>
        {routing}
    </Provider>, document.getElementById('root'));

if (module.hot) { // enables hot module replacement if plugin is installed
    module.hot.accept();
}

// registerServiceWorker()