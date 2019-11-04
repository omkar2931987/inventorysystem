import React from 'react';
import ReactDOM from 'react-dom';
import { Route,Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Dashboard from './dashboard';
import Products from './products';

const routing = (<Router><div>
    <div>
        <Route><Link to="/">Home</Link></Route>
        <Route><Link to="/dashboard">Dashboard</Link></Route>
        <Route><Link to="/products">Products</Link></Route>   
    </div>

    <Route exact path="/" component={App} />    
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/products" component={Products} />
    
    </div></Router>)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
