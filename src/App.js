import React from "react"
import './App.css';
import HomePage from "./pages/homepage/HomePage"
import { Switch, Route } from "react-router-dom"
import Shop from "./pages/shop/Shop"
import Header from "./components/header/Header"
import SignInSignUp from "./pages/signin-signup/SignInSignUp"


function App() {
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
