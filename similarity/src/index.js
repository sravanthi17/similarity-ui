import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import {applyMiddleware, compose, createStore} from 'redux';
import './index.css';
import * as serviceWorker from './serviceWorker';
import { Route, BrowserRouter as Router } from 'react-router-dom'
import FileUpload from "./FileUpload";
import thunk from 'redux-thunk';
import reducer from './reducers'
import { routerMiddleware} from 'react-router-redux';
import history from './history';
import ViewData from "./ViewData";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;
const historyMiddleware = routerMiddleware(history);

export const store = createStore(
    reducer,
    composeEnhancers(
        applyMiddleware( historyMiddleware, thunk)
    )
);

const routing = (
    <Provider store={store}>
    <Router>
        <div>
            <Route path="/upload" component={FileUpload} />
            <Route path="/viewData" component={ViewData} />
        </div>
    </Router>
    </Provider>
)
ReactDOM.render(routing, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
