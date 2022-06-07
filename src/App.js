import "./App.css";
import Header from "./components/Header/Header";
import Home from "./components/Home/Home";
import Login from "./components/Login/Login";
//Dont delete this breaks website
import { Router, Routes, Route, BrowserRouter } from "react-router-dom";
// Dont delete this breaks webs
import Checkout from "./components/Checkout/Checkout";
import { useEffect } from "react";
import {auth} from './firebase';
import { useStateValue } from "./components/StateProvider/StateProvider";

import Payment from "./components/Payment/Payment";

function App() {
  //leave as it is
  const [{ cart, user }, dispatch] = useStateValue();

  // Listener which it attached to the firebase datalayer - because of the cookies - fixes refresh login issue keep it here
  useEffect(()=>{
    // this will only run when the app component laods
    // as soon as the app loads the 
    auth.onAuthStateChanged(authUser => {
      //console.log('THE USER IS >>>>> : ', authUser)

      if (authUser){
        // user has logged in
        dispatch({
          type: 'SET_USER',
          user: authUser
        })
      } else {
        // the user is logged out 
        dispatch({
          type: 'SET_USER',
          user: null
        })

      }
    })
  }, [])
  

  return (
    <BrowserRouter>
      <div className="app">
        <Header />
        <Routes>
          <Route exact path="/login" element={<Login />} />

          <Route exact path="/" element={<Home />} />

          <Route exact path="/checkout" element={<Checkout />} />

          <Route exact path="/payment" element={<Payment />} />
        </Routes>
      </div>
    </BrowserRouter>
  );
}

export default App;
