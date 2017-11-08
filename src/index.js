import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import 'tachyons'

import App from './App';
import Header from './Header'

ReactDOM.render(
  <Router>
    <div className="sans-serif">
      <Header/>
      <Route exact path='/' component={App} />
    </div>
  </Router>,
  document.getElementById('root')
);
