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
  CartItem,
  PrimaryMenu
} from './../../components';
import {
  cartGetRequest,
  cartAddRequest,
  cartRemoveRequest,
  cartUpdateRequest
} from './../../redux/actions/Cart';
import {
  checkoutGetRequest
} from './../../redux/actions/Checkout';
import {
  logoutRequest
} from './../../redux/actions/Auth';
import "./index.css";

const { connect } = require('react-redux');

export interface ICartProps extends RouteComponentProps{
  cartGetRequest: any;
  cartAddRequest: any;
  cartRemoveRequest: any;
  cartUpdateRequest: any;
  checkoutGetRequest: any;
  logoutRequest: any;
  carts: any;
  checkouts: any;
}

export interface ICartState {
  carts: any;
}

enum updateCartByIdTypes { "INCREMENT", "DECREMENT" };

export class Cart extends Component<ICartProps, ICartState> {
  constructor(props: ICartProps) {
    super(props);

    this.state = {
      carts: []
    }

    this.loadCarts = this.loadCarts.bind(this);
    this.removeCart = this.removeCart.bind(this);
    this.updateCart = this.updateCart.bind(this);
  }

  componentDidMount = () => {
    this.loadCarts();
    this.loadCheckouts();
  };

  loadCheckouts = () => {
    this.props.checkoutGetRequest();
  }

  loadCarts = () => {
    this.props.cartGetRequest();
  }

  removeCart = (params: {id: any}) => {
    this.props.cartRemoveRequest({id: params.id})
  }

  updateCart = (params: {id: any, type: updateCartByIdTypes}) => {
    this.props.cartUpdateRequest({
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
          className="cart-back-to-top"
        />
        <PrimaryMenu
          logout={this.props.logoutRequest}
          numberOfCarts={this.props.carts.length}
          numberOfCheckouts={this.props.checkouts.length}
        >
          {this.props.carts.map((cart: any, index: any) => {
            return (
              <CartItem
                id={cart.id}
                name={cart.product.name}
                imgUrl={cart.product.img_url}
                availableCount={cart.product.available_count}
                description={cart.product.description}
                unitPrice={cart.product.unit_price}
                counterfiet={cart.product.counterfielt}
                totalPrice={cart.totalPrice}
                productCount={cart.product_count}
                removeCart={this.removeCart}
                updateCart={this.updateCart}
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
    cartGetRequest,
    cartAddRequest,
    cartRemoveRequest,
    cartUpdateRequest,
    checkoutGetRequest,
    logoutRequest
  }, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Cart)
)
