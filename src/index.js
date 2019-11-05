import React from 'react';
import ReactDOM from 'react-dom';
import { Route,Link, BrowserRouter as Router } from 'react-router-dom'
import './index.css';
import * as serviceWorker from './serviceWorker';

import App from './App';
import Dashboard from './dashboard';
import ListProducts from './listproducts';
import Products from './products';
import Customers from './customers';
import Accounts from './accounts';
import Categories from './categories';
import Purchase from './purchase';
import Sales from './sales';
import Settings from './settings';

const routing = (<Router><div>
    <div className="sidemenu">
    <ul className="sidebar">
        <li><Route><Link to="/">Home</Link></Route></li>
        <li><Route><Link to="/dashboard">Dashboard</Link></Route></li>
        <li><Route><Link to="/listproducts">List Products</Link></Route></li>
        <li><Route><Link to="/products">Add Products</Link></Route></li>
        <li><Route><Link to="/customers">Customers</Link></Route></li>
        <li><Route><Link to="/accounts">Accounts</Link></Route></li>
        <li><Route><Link to="/categories">Categories</Link></Route></li>
        <li><Route><Link to="/purchase">Purchase</Link></Route></li>
        <li><Route><Link to="/sales">Sales</Link></Route></li>
        <li><Route><Link to="/settings">Settings</Link></Route></li>   
    </ul>
    </div>

    <Route exact path="/" component={App} />    
    <Route path="/dashboard" component={Dashboard} />
    <Route path="/listproducts" component={ListProducts} />
    <Route path="/products" component={Products} />
    <Route path="/customers" component={Customers} />
    <Route path="/accounts" component={Accounts} />
    <Route path="/categories" component={Categories} />
    <Route path="/purchase" component={Purchase} />
    <Route path="/sales" component={Sales} />
    <Route path="/settings" component={Settings} />
    </div></Router>)

ReactDOM.render(routing, document.getElementById('root'));

serviceWorker.unregister();
