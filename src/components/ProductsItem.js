import React from "react";
// import img1 from '../images/img1'
export default function ProductsItem(props) {
  const { products } = props;
  return (
    <div>
      <div className="card" style={{ width: "18rem"  , height:"24rem",marginTop:"2rem"}}>
        <img src={products.img} className="card-img-top" alt="..." style={{height:"14rem"}} />
        <div className="card-body">
          <h5 className="card-title">{products.name}</h5>
          <p className="card-text">Prise {products.price} $</p>
          <a href={"/products/"+products.id} className="btn btn-primary">
            datails
          </a>
        </div>
      </div>
    </div>
  );
}
