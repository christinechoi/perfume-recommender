import React from 'react';
import ReactDOM from 'react-dom';
import { BrowserRouter as Router, Route, Switch } from 'react-router-dom';
import { createStore, applyMiddleware, compose } from 'redux';
import thunk from 'redux-thunk';

import App from './App';
import rootReducer from './reducers/rootReducer';
import { Provider } from 'react-redux';
import perfumesReducer from './reducers/perfumesReducer';

import '../node_modules/semantic-ui/dist/semantic.min.css';

import './styles.global.scss';

const store = createStore(
  rootReducer, 
  compose(
    applyMiddleware(thunk), 
    window.__REDUX_DEVTOOLS_EXTENSION__ && 
    window.__REDUX_DEVTOOLS_EXTENSION__()
  )
);


ReactDOM.render(

  <Provider store={store} > 
    <App />
  </Provider>, 
  document.getElementById('root')
);




