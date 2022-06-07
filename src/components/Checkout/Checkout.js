import React from "react";
import Subtotal from "../Subtotal/Subtotal";
import "./Checkout.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider/StateProvider";
import { FaOpencart } from "react-icons/fa";

function Checkout() {
  const [{ cart, user }] = useStateValue();


  return (
    <div className="checkout__billboard">
      <img
        className="checkout__ad"
        src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1652438966/theshop/checkout_ad_rqcgvh.webp"
        alt="checkoutad"
        loading="lazy"
      />

      <div className="checkout__title">
        <h2>
          Welcome to your cart
          <FaOpencart />
          <br />
          {user ? user.email : "Hello guest please login first"}
        </h2>
      </div>

      <div className="checkout">
        <div className="checkout__left">
          {cart.map((item) => (
            <CheckoutProduct
              id={item.id}
              title={item.title}
              image={item.image}
              price={item.price}
              rating={item.rating}
            />
          ))}
        </div>

        <div className="checkout__right">
          <Subtotal />
        </div>
      </div>
    </div>
  );
}

export default Checkout;
