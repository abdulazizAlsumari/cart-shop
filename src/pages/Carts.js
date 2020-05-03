import React, { Component } from "react";
import { connect } from "react-redux";
import CartItem from "../components/CartItem";
import {clearCart} from "../store/actions/actions";
class Carts extends Component {
 
  pay = () => {
    // send the request to the server
    // clear cart
    this.props.clearCart();
    alert("we reseved");  }
  render() {
    return (
      <div>
        <h1>Carts</h1>
        <div className="row">
          {this.props.cartItem.map((item,index) => (
            <div
              className={"col-3"}
              key={item.product.id}
              style={{ marginRight: "3rem" }}
            >
              <CartItem item={item} index={index} />
            </div>
          ))}
        </div>
        <br />
        <h3>Total : {this.props.total} $</h3>
        <button className="btn btn-primary btn-block" onClick={this.pay}>Pay</button>
        <br />
        <br />
      </div>
    );
  }
}

const mapStateToProps = (state) => {
return{
  cartItem: state.cart,
 total :  state.cart.reduce((total, item) => total + item.quantity * item.product.price, 0),
}
}
const mapDispatchToProps = (dispatch) => {
  return{
    clearCart:()=> dispatch(clearCart()) }
  }  


export default connect(mapStateToProps,mapDispatchToProps)(Carts);