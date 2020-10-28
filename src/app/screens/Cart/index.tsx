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
  logoutRequest
} from './../../redux/actions/Auth';
import "./index.css";

const { connect } = require('react-redux');

export interface ICartProps extends RouteComponentProps{
  cartGetRequest: any;
  cartAddRequest: any;
  cartRemoveRequest: any;
  cartUpdateRequest: any;
  logoutRequest: any;
  carts: any;
}

export interface ICartState {
  carts: any;
}

export class Cart extends Component<ICartProps, ICartState> {
  constructor(props: ICartProps) {
    super(props);

    this.state = {
      carts: []
    }

    this.loadCarts = this.loadCarts.bind(this);
    this.removeCart = this.removeCart.bind(this);
  }

  componentDidMount = () => {
    this.loadCarts();
  };

  loadCarts = () => {
    this.props.cartGetRequest();
  }

  removeCart = (id: any) => {
    this.props.cartRemoveRequest(id)
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
    carts: state.cart.carts
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    cartGetRequest,
    cartAddRequest,
    cartRemoveRequest,
    cartUpdateRequest,
    logoutRequest
  }, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Cart)
)
