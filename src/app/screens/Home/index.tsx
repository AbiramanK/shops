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
  ProductItem,
  PrimaryMenu
} from './../../components';
import {
  productGetRequest,
  productAddRequest,
  productRemoveRequest
} from './../../redux/actions/Product';
import {
  cartGetRequest
} from './../../redux/actions/Cart';
import {
  checkoutGetRequest
} from './../../redux/actions/Checkout';
import {
  logoutRequest
} from './../../redux/actions/Auth';
import "./index.css";

const { connect } = require('react-redux');

export interface IHomeProps extends RouteComponentProps{
  productGetRequest: any;
  productAddRequest: any;
  productRemoveRequest: any;
  cartGetRequest: any;
  checkoutGetRequest: any;
  logoutRequest: any;
  products: any;
  carts: any;
  checkouts: any;
}

export interface IHomeState {
  products: any;
}

export class Home extends Component<IHomeProps, IHomeState> {
  constructor(props: IHomeProps) {
    super(props);

    this.state = {
      products: []
    }

    this.loadProducts = this.loadProducts.bind(this);
  }

  componentDidMount = () => {
    this.loadProducts();
    this.loadCarts();
    this.loadCheckouts();
  };

  loadProducts = () => {
    this.props.productGetRequest();
  }

  loadCarts = () => {
    this.props.cartGetRequest();
  }

  loadCheckouts = () => {
    this.props.checkoutGetRequest();
  }
 
  public render() {
    return (
      <div
        className="product-root-div"
      >
        <BackTop 
          className="home-back-to-top"
        />
        <PrimaryMenu
          logout={this.props.logoutRequest}
          numberOfCarts={this.props.carts.length}
          numberOfCheckouts={this.props.checkouts.length}
        >
          {this.props.products.map((product: any, index: any) => {
            return (
              <ProductItem
                name={product.name}
                imgUrl={product.img_url}
                availableCount={product.available_count}
                description={product.description}
                unitPrice={product.unit_price}
                counterfiet={product.counterfielt}
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
    productGetRequest,
    productAddRequest,
    productRemoveRequest,
    cartGetRequest,
    checkoutGetRequest,
    logoutRequest
  }, dispatch);
}

export default withRouter(
  connect(mapStateToProps, mapDispatchToProps)(Home)
)
