import React, {
  Component
} from 'react';
import { 
  bindActionCreators,
  compose 
} from 'redux';
import {
  BackTop
} from 'antd';
import {
  withRouter,
  RouteComponentProps
} from 'react-router-dom';

import {
  CheckoutItem,
  PrimaryMenu
} from './../../components';
import {
  checkoutGetRequest,
  checkoutAddRequest,
  checkoutRemoveRequest,
  checkoutUpdateRequest
} from './../../redux/actions/Checkout';
import {
  cartGetRequest
} from './../../redux/actions/Cart';
import {
  logoutRequest
} from './../../redux/actions/Auth';
import "./index.css";

const { connect } = require('react-redux');

export interface ICheckoutProps extends RouteComponentProps{
  checkoutGetRequest: any;
  checkoutAddRequest: any;
  checkoutRemoveRequest: any;
  checkoutUpdateRequest: any;
  cartGetRequest: any;
  logoutRequest: any;
  carts: any;
  checkouts: any;
}

export interface ICheckoutState {
  carts: any;
}

enum updateCheckoutByIdTypes { "INCREMENT", "DECREMENT" };

export class Checkout extends Component<ICheckoutProps, ICheckoutState> {
  constructor(props: ICheckoutProps) {
    super(props);

    this.state = {
      carts: []
    }

    this.loadCheckouts = this.loadCheckouts.bind(this);
    this.removeCheckout = this.removeCheckout.bind(this);
    this.updateCheckout = this.updateCheckout.bind(this);
  }

  componentDidMount = () => {
    this.loadCheckouts();
    this.loadCarts();
  };

  loadCarts = () => {
    this.props.cartGetRequest();
  }

  loadCheckouts = () => {
    this.props.checkoutGetRequest();
  }

  removeCheckout = (params: {id: any}) => {
    this.props.checkoutRemoveRequest({id: params.id})
  }

  updateCheckout = (params: {id: any, type: updateCheckoutByIdTypes}) => {
    this.props.checkoutUpdateRequest({
      id: params.id, 
      type: params.type
    })
  }

  public render() {
    return (
      <div
        className="product-root-div"
      >
        <BackTop 
          className="checkout-back-to-top"
        />
        <PrimaryMenu
          logout={this.props.logoutRequest}
          numberOfCarts={this.props.carts.length}
          numberOfCheckouts={this.props.checkouts.length}
        >
          {this.props.checkouts.map((checkout: any, index: any) => {
            return (
              <CheckoutItem
                id={checkout.id}
                name={checkout.product.name}
                imgUrl={checkout.product.img_url}
                availableCount={checkout.product.available_count}
                description={checkout.product.description}
                unitPrice={checkout.product.unit_price}
                counterfiet={checkout.product.counterfielt}
                totalPrice={checkout.totalPrice}
                productCount={checkout.product_count}
                removeCheckout={this.removeCheckout}
                updateCheckout={this.updateCheckout}
              />
            )
          })}
        </PrimaryMenu>
      </div>
    );
  }
}

const mapStateToProps = (state: any) => {
  return {
    isLoading: state.loader.isLoading,
    products: state.product.products,
    carts: state.cart.carts,
    checkouts: state.checkout.checkouts
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    checkoutGetRequest,
    checkoutAddRequest,
    checkoutRemoveRequest,
    checkoutUpdateRequest,
    cartGetRequest,
    logoutRequest
  }, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Checkout)
)
