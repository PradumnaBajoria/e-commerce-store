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


  useEffect(() => {
    var unsubscribeFromAuth = auth.onAuthStateChanged(user => {
      setCurrentUser(user)
      console.log(user)
    })
    return () => {
      unsubscribeFromAuth()
      console.log("hi")
    }
  }, [])

  return (
    <div>
      <Header currentUser={currentUser} />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
