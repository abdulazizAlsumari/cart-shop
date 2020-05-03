import React from "react";
import { Link } from "react-router-dom";
import { connect } from "react-redux";

function CartIcon(Props) {
  return (
    <div>
      <Link to="/carts">
        <i
          className="fa fa-shopping-cart"
          style={{ fontSize: "28px", color: "orange" }}
        ></i>
        <span
          className="badge badge-danger "
          style={{ position: "absolute", top: "5px", right: "5px" }}
        >
          {Props.totalQuantity}
        </span>
      </Link>
    </div>
  );
}
const mapStateToProps = (state) => {
  return {
        totalQuantity: state.cart.reduce((total, item) => total + parseInt(item.quantity), 0),
  };
};

export default connect(mapStateToProps)(CartIcon);



//         totalQuantity: state.cart.reduce((total, item) => total + item.quantity, 0),
//     };
// }

// export default connect(mapStateToProps)(CartIcon);