import React from "react";
import "./CheckoutProduct.css";
import { useStateValue } from "../StateProvider/StateProvider";

function CheckoutProduct({ id, image, title, price, rating }) {
  const [{ cart }, dispatch] = useStateValue();

  const deletefromCart = () => {
    //action remove product from cart
    dispatch({
      type: "DELETE_FROM_CART",
      id: id,
    });
  };

  return (
    <div className="checkoutProudct">
      <img
        className="checkoutProduct__image"
        src={image}
        alt="checkoutproduct_img"
      />

      <div className="checkoutProduct__info">
        <p className="checkoutProduct__title">{title}</p>
        <p className="checkoutProduct__price">
          {" "}
          <small>$</small>
          <strong>{price}</strong>
        </p>

        <div className="checkoutProduct__rating">
          {Array(rating)
            .fill()
            .map(() => (
              <p>⭐</p>
            ))}
        </div>
        <button onClick={deletefromCart} className="checkoutProduct__button">
          Remove from cart
        </button>
      </div>
    </div>
  );
}

export default CheckoutProduct;
