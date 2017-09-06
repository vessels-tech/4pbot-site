import React from 'react';
import ReactDOM from 'react-dom';
import {BrowserRouter as Router, Route} from 'react-router-dom'

import 'tachyons'

import App from './App';
import Survey from './Survey/Survey'
import Header from './Header'

ReactDOM.render(
  <Router>
    <div className="sans-serif">
      <Header/>
      <Route exact path='/' component={App} />
      <Route path='/survey' component={Survey}/>
    </div>
  </Router>,
  document.getElementById('root')
);
