import React, { useState, useEffect } from "react"
import './App.css';
import HomePage from "./pages/homepage/HomePage"
import { Switch, Route, Redirect } from "react-router-dom"
import Shop from "./pages/shop/Shop"
import Header from "./components/header/Header"
import SignInSignUp from "./pages/signin-signup/SignInSignUp"
import { auth, createUserProfileDocument } from "./firebase/Firebase"
import { connect } from "react-redux"
import { setCurrentUser } from "./redux/user/UserActions"
import { selectCurrentUser } from "./redux/user/UserSelectors"
import { createStructuredSelector } from 'reselect'
import CheckOut from "./pages/checkout/CheckOut"


function App(props) {

  //const [currentUser, setCurrentUser] = useState(null)
  const { setCurrentUser } = props

  useEffect(() => {
    var unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //setCurrentUser(user)
      //createUserProfileDocument(user)
      //console.log(user)
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          //console.log(snapshot.data())
          setCurrentUser({
            id : snapshot.id,
            ...snapshot.data()
          })
        })
        //console.log("hello", currentUser)
      }else{
        setCurrentUser(userAuth)
      }

    })
    return () => {
      unsubscribeFromAuth()
      console.log("hi")
    }
  }, [])

  return (
    <div>
      <Header />
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route path='/shop' component={Shop} />
        <Route exact path='/checkout' component={CheckOut} />
        <Route exact path='/signin' render={() => props.currentUser ? (<Redirect to="/" />) : (<SignInSignUp />)} />
      </Switch>
    </div>
  );
}

const mapStateToProps = createStructuredSelector({
  currentUser : selectCurrentUser
})

const mapDispatchToProps = dispatch => ({
  setCurrentUser: user => dispatch(setCurrentUser(user))
})

export default connect(mapStateToProps, mapDispatchToProps)(App);
