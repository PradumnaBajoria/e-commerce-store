import React, { useState, useEffect } from "react"
import './App.css';
import HomePage from "./pages/homepage/HomePage"
import { Switch, Route } from "react-router-dom"
import Shop from "./pages/shop/Shop"
import Header from "./components/header/Header"
import SignInSignUp from "./pages/signin-signup/SignInSignUp"
import { auth, createUserProfileDocument } from "./firebase/Firebase"

function App() {

  const [currentUser, setCurrentUser] = useState(null)


  useEffect(() => {
    var unsubscribeFromAuth = auth.onAuthStateChanged(async userAuth => {
      //setCurrentUser(user)
      //createUserProfileDocument(user)
      //console.log(user)
      if(userAuth){
        const userRef = await createUserProfileDocument(userAuth)
        userRef.onSnapshot(snapshot => {
          //console.log(snapshot.data())
          /*setCurrentUser(
            snapshot.id,
            ...snapshot.data()
          )*/
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
      <Header currentUser={currentUser} />
      {console.log("hello", currentUser)}
      <Switch>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
        <Route exact path='/signin' component={SignInSignUp} />
      </Switch>
    </div>
  );
}

export default App;
