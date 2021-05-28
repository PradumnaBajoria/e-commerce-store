import React from "react"
import './App.css';
import HomePage from "./pages/homepage/HomePage"
import { Switch, Route } from "react-router-dom"


const HatsPage = () => (
  <div>
    <h1>HATS PAGE</h1>
  </div>
)

function App() {
  return (
    <switch>
      <div>
        <Route exact path='/' component={HomePage} />
        <Route exact path='/hats' component={HatsPage} />
    </div>
    </switch>
  );
}

export default App;
