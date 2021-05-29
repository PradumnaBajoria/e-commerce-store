import React from "react"
import './App.css';
import HomePage from "./pages/homepage/HomePage"
import { Switch, Route } from "react-router-dom"
import Shop from "./pages/shop/Shop"

function App() {
  return (
    <switch>
      <div>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/shop' component={Shop} />
    </div>
    </switch>
  );
}

export default App;
