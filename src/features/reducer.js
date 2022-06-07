export const initalState = {
  cart: [],
  user: null,
};

// Selector
//calculates the total number  in the cart
export const getCartTotal = (cart) =>
  cart?.reduce((amount, item) => item.price + amount, 0);

// passing the state and action of what to do
const reducer = (state, action) => {
  //debug action start
  //console.log(action);
  //debug action end
  switch (action.type) {
    case "ADD_TO_CART":
      return {
        ...state,
        cart: [...state.cart, action.item],
      };

    case "DELETE_FROM_CART":
      const index = state.cart.findIndex((cartItem) => cartItem.id === action.id);

      let newCart = [...state.cart];
      if (index >= 0) {
        //choppint the array by one
        newCart.splice(index, 1);
      } else {
        console.warn(
          `Cant remove the product from cart (id: ${action.id} as it is not in the cart!)`
        );
      }

      return {
        ...state,
        cart: newCart
      }


      case "SET_USER": 

      return {
        ...state,
        user: action.user
  
      }


    default:
      return state;
  }
};

export default reducer;
