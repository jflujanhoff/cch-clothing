import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';

import store from '../src/redux/store';

import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <Router>
            <App />
        </Router>
    </Provider>, 
    document.getElementById('root'));
