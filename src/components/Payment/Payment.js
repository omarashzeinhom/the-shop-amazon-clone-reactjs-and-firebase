import React from "react";
import {Link} from "react-router-dom";
import "./Payment.css";
import CheckoutProduct from "../CheckoutProduct/CheckoutProduct";
import { useStateValue } from "../StateProvider/StateProvider";

function Payment() {
  const [{ cart, user }, dispatch] = useStateValue();

  return (
    <div className="payment">
      <div className="payment__container">
        <h1>
          Checkout(
            <Link to="/checkout">{cart?.length} products</Link>
          )
        </h1>
        {/* Payment Section - delivery address  */}
        <div className="payment__section">
          <div className="payment__title">
            <h1>Delivery Address</h1>
            <div className="payment__address">
              <p>email : {user?.email}</p>
              <p>789 PureJS st</p>
              <p>New York City, NYC</p>
            </div>
          </div>
        </div>

        {/* Payment Section - Review */}

        <div className="payment__section">
          <div className="payment__title">
            <h1>Review items and delivery</h1>
          </div>
          <div className="payment__items">
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
        </div>
        {/* Payment Section - Payment method */}
        <div className="payment__section">
          <div className="payment__title">
            <h1>Payment Method</h1>
          </div>
          <div className="payment__details"></div>
        </div>

        <div className="payment__note">
          Bear in mind this is a development version so please do not enter your
          credit card information here or it will occur charges . The credit
          card you can use for the development website is .
        </div>
      </div>
    </div>
  );
}

export default Payment;
