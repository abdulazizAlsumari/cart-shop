import React, { Component } from "react";
import ProductsItem from "../components/ProductsItem";
import ProductsApi from "../api/products";
export default class Products extends Component {


  state = {
    products: [],
  };

  componentDidMount() {
    ProductsApi.getAll().then((data) => {
      this.setState({ products: data });
    });
  }

  render() {
    return (
      <div>
        <p>Proudcts</p>
        <div className="row">
          {this.state.products.map((products) => (
            <div className={"col-4"} key={products.id}>
              <ProductsItem products={products} />
            </div>
          ))}
        </div>
      </div>
    );
  }
}
