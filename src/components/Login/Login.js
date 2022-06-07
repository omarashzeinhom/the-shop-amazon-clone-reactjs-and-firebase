import React from "react";
import "./Login.css";
import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
// Notice : Remmebr  to import local firebase
import { auth } from "../../firebase";

function Login() {
  //an empty string is used here instead ofnull to get text
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  //debug console.log(password,email);

  const signIn = (e) => {
    e.preventDefault();
    auth.signInWithEmailAndPassword(email, password).then((auth) => {
      navigate("/");
    });

    // do some fancy firebase login ....
  };

  const register = (e) => {
    e.preventDefault();
    auth
      .createUserWithEmailAndPassword(email, password)
      .then((auth) => {
        if (auth) {
          navigate("/");
        }
      })
      .catch((error) => alert(error.message));
    // do some fancy firebase register
  };

  return (
    <div className="login">
      <Link to="/">
        <img
          src="https://res.cloudinary.com/dxgqvvg0z/image/upload/v1652527482/theshop/logo/TheSHOP_bsypza.webp"
          className="login__logo"
        />
      </Link>
      <div className="login__container">
        <h1>Sign In</h1>
        <form>
          <h5>Email</h5>
          <input
            type="text"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <h5>Password</h5>
          <input
            type="password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <button className="login__signInBtn" onClick={signIn} type="submit">
            Sign in
          </button>
        </form>
        <p>
          By Signing in you agree to the TheShop prototype Conditions of Use &
          Sale. Please see our Privacy Notice, our Cookies Notice and our
          interest-based ads notice.
        </p>
        <button className="login__registerBtn" onClick={register}>
          Register your account
        </button>
      </div>
    </div>
  );
}

export default Login;
