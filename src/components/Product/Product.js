import React from "react";
import { useStateValue } from "../StateProvider/StateProvider";
import "./Product.css";




function Product({ id, title, image, price , rating}) {

  const [{cart}, dispatch] = useStateValue();
  //debug if data is passed from reducer to state start
  //console.log('The cart test', cart);
    //debug if data is passed from reducer to state end

  const addtoCart = ()=> {
    // dispatch an action into the datalayer 
    dispatch({
      type: 'ADD_TO_CART',
      item: {
        id: id,
        title: title,
        image: image,
        price: price,
        rating: rating,
      },
    })
  }



  return (
    <div className="product">
      {/** Product Info Start */}
      <div className="product__info">
        <p>{title}</p>
        <p className="product__price">
          <small>€</small>
          <strong>{price}</strong>
        </p>
        <div className="product__rating">
        {Array(rating).fill().map(() => (
                <p>
                ⭐
              </p>
        ))}
        </div>
      </div>
      {/** Product Info end */}
      <img src={image} loading="lazy" alt="product-img"/>
      <button onClick={addtoCart}>Add Product to Cart</button>
    </div>
  );
}

export default Product;
