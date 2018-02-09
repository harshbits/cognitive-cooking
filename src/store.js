/*
    Title: store.js
    Version: 1.0.0
    Author: Harsh Bhavsar
    Repo: https://github.com/harshbits/cognitive-cooking/
*/
import { applyMiddleware, createStore }  from 'redux';

//middlewares
 import { createLogger } from 'redux-logger'
import promise from 'redux-promise-middleware';
import thunk from 'redux-thunk';

import reducers from './reducers';

const middleware = applyMiddleware(promise(), thunk, createLogger());

export default createStore(reducers, middleware);
