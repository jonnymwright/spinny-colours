
import './index.css';
import testApp from './reducers/testApp'
import { createStore, applyMiddleware } from 'redux'
import {createLogger} from 'redux-logger';

export default function getStore() {
    const middlewares = [createLogger()];
    const store = createStore(testApp, applyMiddleware(...middlewares))
    return store;
}