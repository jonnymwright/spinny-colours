import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import testApp from './reducers/testApp'
import { Provider } from 'react-redux'
import { createStore, applyMiddleware } from 'redux'
import {createLogger} from 'redux-logger';
import * as serviceWorker from './serviceWorker';

const middlewares = [createLogger()];
const store = createStore(testApp, applyMiddleware(...middlewares))
ReactDOM.render(<Provider store={store}>
    <App />
  </Provider>, 
  document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();
