import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import reportWebVitals from './reportWebVitals';
import { BrowserRouter as Router, Route } from "react-router-dom";

import Header from './component/Header'
import Home from "./component/Home/Home";
import CreateOrder from './component/CreateOrder/CreateOrder'
import 'react-notifications/lib/notifications.css';

import store from "./store/reducers/index";
import { Provider } from "react-redux";

ReactDOM.render(
  <React.StrictMode>
    <div className="App">
      <Provider store={store}>
        <Router>
          <Header />
          <Route exact path="/" component={Home} />
          <Route exact path="/order" component={CreateOrder} />
        </Router>
      </Provider>
    </div>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
