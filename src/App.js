import React, { useEffect, useState } from "react";
import "./App.css";
import Navbar from "./components/navbar/Navbar";
import Home from "./components/home/Home";
import Activity from "./components/activity/Activity";
import { BrowserRouter, Route, Switch } from "react-router-dom";

function App() {
  const [basket, setBasket] = useState(0);

  const addToBasket = () => {
    //console.log('hey')
    setBasket(basket + 1);
  };
  return (
    <>
      <BrowserRouter>
        <Navbar basketNumber={basket} />
        <div className="container">
          <Switch>
            <Route
              exact
              path="/"
              render={() => <Home myFunc={addToBasket} />}
            />
            <Route path="/activity" component={Activity} />
          </Switch>
        </div>
      </BrowserRouter>
    </>
  );
}

export default App;
