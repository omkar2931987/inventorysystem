import React from 'react';
import ReactDOM from 'react-dom';
import { Route,Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Dashboard from './dashboard';
import Products from './products';
import Customers from './customers';
import Accounts from './accounts';
import Categories from './categories';
import Purchase from './purchase';
import Sales from './sales';
import Settings from './settings';

const routing = (<Router><div>
    <div>
        <Route><Link to="/">Home</Link></Route>
        <Route><Link to="/dashboard">Dashboard</Link></Route>
        <Route><Link to="/products">Products</Link></Route>
        <Route><Link to="/customers">Customers</Link></Route>
        <Route><Link to="/accounts">Accounts</Link></Route>
        <Route><Link to="/categories">Categories</Link></Route>
        <Route><Link to="/purchase">Purchase</Link></Route>
        <Route><Link to="/sales">Sales</Link></Route>
        <Route><Link to="/settings">Settings</Link></Route>   
    </div>

    <Route exact path="/" component={App} />    
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/products" component={Products} />
    <Route path="/customers" component={Customers} />
    <Route path="/accounts" component={Accounts} />
    <Route path="/categories" component={Categories} />
    <Route path="/purchase" component={Purchase} />
    <Route path="/sales" component={Sales} />
    <Route path="/settings" component={Settings} />
    </div></Router>)

ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
