import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import NavigationBar from "./components/NavigationBar";
import {BrowserRouter as Router} from "react-router-dom";
import * as serviceWorker from './serviceWorker';
import logger from 'redux-logger';
import {composeWithDevTools} from 'redux-devtools-extension';
import thunk from "redux-thunk";
import {createStore, applyMiddleware} from "redux";
import rootReducer from './reducers'
import {Provider} from 'react-redux'
import routes from './routes';
import FlashMessagesList from "./components/flash/FlashMessagesList";
import jwtDecode from 'jwt-decode';
import setAuthorizationToken from "./utils/setAuthorizationToken";
import {setCurrentUser} from "./actions/authActions";

const store = createStore(
    rootReducer,
    composeWithDevTools(
        applyMiddleware(thunk, logger)
    )
);

if (localStorage.jwtToken) {
    setAuthorizationToken(localStorage.jwtToken);
    store.dispatch(setCurrentUser(jwtDecode(localStorage.jwtToken)));
}

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <div>
                <NavigationBar/>
                <FlashMessagesList/>
                {routes}
            </div>
        </Router>
    </Provider>,
    document.getElementById('root')
);


serviceWorker.unregister();
