import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';
import 'bootstrap/dist/css/bootstrap.css';
import store from "./app/redux/ConfigStore";
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router';
import { ToastContainer, toast } from 'react-toastify';
import "antd/dist/antd.css"

const history = createBrowserHistory();

const { Provider } = require('react-redux');

ReactDOM.render(
  <Provider store={store}>
    <ConnectedRouter
      history={history}
    >
      <React.StrictMode>
        <App />
        <ToastContainer />
      </React.StrictMode>
    </ConnectedRouter>
  </Provider>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
