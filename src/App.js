import React from "react";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import logo from "./logo.svg";
import "./App.css";
import Home from "./pages/Home";
import Products from "./pages/Products";
import Carts from "./pages/Carts";
import Product from './pages/Product'
import CartIcon from "./components/CartIcon";
import {Provider}from 'react-redux';
import store from './store/store'
 
function App() {
  return (
    <Router>
      <div className="container">
        <nav className="navbar navbar-expand-lg navbar-light bg-light">
          <a className="navbar-brand" href="#">
            CatsStore
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-toggle="collapse"
            data-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>

          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav mr-auto">
              <li className="nav-item active">
                <Link className="nav-link" to="">
                  Home{" "}
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="products">
                  Prouduct
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link" to="carts" exact>
                  Cart
                </Link>
              </li>
            </ul>
          </div>
          <CartIcon />
        </nav>

        <Route path="/" component={Home} exact />
        <Route path="/products" component={Products}exact  />
        <Route path="/products/:id" component={Product}  />
        <Route path="/carts" component={Carts}  exact/>
      </div>
    </Router>
  );
}

function AppWithStore(){
  return <Provider store={store}>
    <App />
  </Provider>
}

export default AppWithStore;
