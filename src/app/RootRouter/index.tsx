import React, {
  Component,
  Suspense
} from "react";
import {
  Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import { createBrowserHistory } from 'history';
import { ConnectedRouter } from 'connected-react-router'
import store from './../redux/ConfigStore';
import {
  Spin
} from 'antd';

import {
  Login,
  Register,
  Home
} from './../screens';
import "./index.css";

const history = createBrowserHistory();
const { connect } = require('react-redux');

export interface ILoginProps {
  isLoading: boolean;
}

export interface ILoginState {

}

export class RootRouter extends Component<ILoginProps, ILoginState> {
  render() {
    return (
      // <Router history={history}>
      <Spin
        tip="Loading..."
        spinning={this.props.isLoading}
      >
        <div className="App">
          <React.Suspense fallback={"Loading"}>
            <Switch>
              <Route
                exact
                path="/"
              >
                <Login />
              </Route>
              <Route
                path="/home"
              >
                <Home />
              </Route>
              <Route
                path="/register"
              >
                <Register />
              </Route>
            </Switch>
          </React.Suspense>
        </div>
      </Spin>
      // </Router>
    )
  }
}

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.loader.isLoading
  }
}

// const mapDispatchToProps = (dispatch: any) => {
//   return bindActionCreators({
//     loginRequest
//   }, dispatch);
// }

export default connect(mapStateToProps, null)(RootRouter)