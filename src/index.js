import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import store from './store/index';
import './index.css';
import App from './App';

import '../node_modules/react-bootstrap/dist/react-bootstrap'
import '../node_modules/bootstrap/dist/css/bootstrap.css';



ReactDOM.render(
    <Provider store={store}>
        <App />
    </Provider>,
    document.getElementById("root")
);
