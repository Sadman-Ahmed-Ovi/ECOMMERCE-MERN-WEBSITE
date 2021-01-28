import React, { useState }  from "react";
import { Link, Redirect } from "react-router-dom";
import ShowImage from "./ShowImage";
import { addItem, updateItem, removeItem } from './cartHelpers';

const Card = ({ product,
                showViewProductButton = true,
              showAddToCartButton = true, }) => {
  
  const [redirect, setRedirect] = useState(false);
  const [count, setCount] = useState(product.count);              

  const showViewButton = showViewProductButton => {
    return (
      showViewProductButton && (
        <Link to={`/product/${product._id}`} className="mr-2">
          <button className="btn btn-outline-primary mt-2 mb-2 card-btn-1">View Product</button>
        </Link>
      )
    );
  };

  const addToCart = () => {
    // console.log('added');
    addItem(product, setRedirect(true));
  };
  
  const shouldRedirect = () => {
    if (redirect) {
      return <Redirect to="/cart" />;
    }
  };
  const showAddToCartBtn = showAddToCartButton => {
    return (
      showAddToCartButton && (
        <button onClick={addToCart} className="btn btn-outline-warning mt-2 mb-2 card-btn-1  ">
          Add to cart
        </button>
      )
    );
  };
  return (
    <div className="card ">
      <div className="card-header card-header-1 ">{product.name}</div>
      <div className="card-body">
        <ShowImage item={product} url="product"/>
        <p className="card-p  mt-2">{product.description.substring(0, 100)} </p>
        <p className="card-p black-10">$ {product.price}</p>
        <p className="black-9">
          Category: {product.category && product.category.name}
        </p>
        <p className="black-8">Added on </p>

        <br />
         {showViewButton(showViewProductButton)}
         {showAddToCartBtn(showAddToCartButton)}
         {shouldRedirect()}
      </div>
    </div>
  );
};

export default Card;
