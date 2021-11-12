import React from "react";
import firebase from "firebase/app"
import { auth } from "../firebase"
import { GoogleOutlined, FacebookOutlined } from "@ant-design/icons";

export default function Login() {
  return (
    <div id="login-page">
      <div id="login-card">
        <h2>Welcome to React-ChatApp!</h2>

        <div
          className="login-button google"
            onClick={() => auth.signInWithRedirect(new firebase.auth.GoogleAuthProvider())}
        >
          <GoogleOutlined /> Sign In with Google
        </div>

        <br />
        <br />

        <div
          className="login-button facebook"
            onClick={() => auth.signInWithRedirect(new firebase.auth.FacebookAuthProvider()) }
        >
          <FacebookOutlined /> Sign In with Facebook
        </div>
      </div>
    </div>
  );
}