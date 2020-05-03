import React from "react";
import { connect } from "react-redux";
import {removeFromCart} from '../store/actions/actions'


 function CartItem(props) {
  const { item,index } = props;
  const {product} = item ;

  return (
    <div>
      <div className="card" style={{ width: "18rem"  ,marginTop:"2rem"}}>
        <img src={product.img} className="card-img-top" alt="..." style={{height:"12rem"}} />
        <div className="card-body" >
          <h5 className="card-title">{product.name}</h5>
          <p className="card-text">Price : {product.price} $</p>
          <p className="card-text">Quantity : {item.quantity} $</p>
          <p className="card-text">Total : {item.quantity * product.price} $</p>
          <a onClick={()=>props.removeFromCart(index)}  className="btn btn-danger" style={{color:"#fff"}}>
            delete
            <i className="fa fa-trash"></i>
          </a>
        </div>
      </div>
    </div>
  );
}
const mapDispatchToProps = (dispatch) => {
  return{
    removeFromCart:(index )=> dispatch(removeFromCart(index)) }
  }  

  export default connect(null,mapDispatchToProps)(CartItem)