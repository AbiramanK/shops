import React, {
  Component
} from 'react';
import { bindActionCreators } from 'redux';
import SimpleReactValidator from 'simple-react-validator';
import {
  Spin
} from 'antd';

import {
  showWarnMessage
} from '../../../utilities/NotificationUtilities';

import {
  loginRequest
} from '../../../redux/actions/Auth';

import "./../../../assets/css/form.css";
import "./index.css";

const { connect } = require('react-redux');

export interface ILoginProps {
  loginRequest: any;
  isLoading: any;
}

export interface ILoginState {
  email: any;
  password: any;
  rememberMe: boolean;
  [key: string]: any;
}

export class Login extends Component<ILoginProps, ILoginState> {

  validator: any;

  constructor(props: ILoginProps) {
    super(props);
    this.validator = new SimpleReactValidator();

    this.state = {
      email: "",
      password: "",
      rememberMe: false
    }

    this.login = this.login.bind(this);
    this.handleInputChange = this.handleInputChange.bind(this);
  }

  componentDidMount() {
    if (process.env.NODE_ENV === "development") {
      this.setState({
        email: "abiramancit@gmail.com",
        password: "12345678"
      })
    }
  }

  login = (e: any) => {
    e.preventDefault();

    if (this.validator.allValid()) {
      let {
        email,
        password
      } = this.state;

      this.props.loginRequest({
        email,
        password
      })
    } else {
      showWarnMessage("Please, fill all the details");
    }
  }

  handleInputChange = (event: any) => {
    let { target } = event;
    let { name, value } = target;

    if (target.type === 'checkbox') {

      if (target.checked) {
        this.setState({
          [name]: true
        })
      } else {
        this.setState({
          [name]: false
        })
      }
    } else {
      this.setState({
        [name]: value
      })
    }
  }

  public render() {
    return (
      <div className="root-div" >
        <div className="auth-wrapper" style={{ width: 450 }}>
          <div className="auth-inner">
            <form onSubmit={this.login} >
              <h3>Sign In</h3>

              <div className="form-group">
                <label>Email address</label>
                <input
                  type="email"
                  className="form-control"
                  placeholder="Enter email"
                  name="email"
                  value={this.state.email}
                  onChange={this.handleInputChange}
                />
                {this.validator.message('email', this.state.email, 'required|email', { className: 'text-danger' })}
              </div>

              <div className="form-group">
                <label>Password</label>
                <input
                  type="password"
                  className="form-control"
                  placeholder="Enter password"
                  name="password"
                  value={this.state.password}
                  onChange={this.handleInputChange}
                />
                {this.validator.message('password', this.state.password, 'required|min:8', { className: 'text-danger' })}
              </div>

              <div className="form-group">
                <div className="custom-control custom-checkbox">
                  <input
                    type="checkbox"
                    className="custom-control-input"
                    name="rememberMe"
                    checked={this.state.rememberMe}
                    onChange={this.handleInputChange}
                  />
                  <label className="custom-control-label" htmlFor="customCheck1">Remember me</label>
                </div>
              </div>

              <button
                type="button"
                onClick={this.login}
                className="btn btn-secondary btn-block"
              >Login</button>
              <p className="forgot-password text-right">
                Forgot <a href="#">password?</a>
              </p>
            </form>
          </div>
        </div>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.loader.isLoading
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    loginRequest
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Login)
