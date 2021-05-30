import React, { useState, useEffect } from "react"
import './App.css';
import HomePage from "./pages/homepage/HomePage"
import { Switch, Route } from "react-router-dom"
import Shop from "./pages/shop/Shop"
import Header from "./components/header/Header"
import SignInSignUp from "./pages/signin-signup/SignInSignUp"
import { auth } from "./firebase/Firebase"

function App() {

  const [currentUser, setCurrentUser] = useState(null)

  

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;


/* 
{
    apiKey: "AIzaSyDvGv63kVugNtrpKjNsSQoarPVc3nCfG3E",
    authDomain: "e-commerce-f52a7.firebaseapp.com",
    projectId: "e-commerce-f52a7",
    storageBucket: "e-commerce-f52a7.appspot.com",
    messagingSenderId: "920892882839",
    appId: "1:920892882839:web:028afe46524b0a4cb38ed2",
    measurementId: "G-VSBY2QKH3C"
  }
*/
