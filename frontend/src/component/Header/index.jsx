import React from "react";

import "./styles.css";

import iconPizza from '../../img/pizza.png'
import { useHistory } from "react-router-dom";

const Home = () => {

  let history = useHistory();
    
  const OrderClick = () => {
      history.push('')
  }

  return (
  <div className="container-header">
      <div className="container-logo-pizza" onClick={OrderClick}>
        <img src={iconPizza}/>
        Brainweb
      </div>
  </div>
    );
};

export default Home;
