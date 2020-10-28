import React, {
  Component
} from 'react';
import { bindActionCreators } from 'redux';
import {
  BackTop
} from 'antd';

import {
  ProductItem,
  PrimaryMenu
} from './../../components';
import {
  productGetRequest,
  productAddRequest,
  productRemoveRequest
} from './../../redux/actions/Product';
import "./index.css";

const { connect } = require('react-redux');

export interface IHomeProps {
  productGetRequest: any;
  productAddRequest: any;
  productRemoveRequest: any;
  products: any;
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
  };

  loadProducts = () => {
    this.props.productGetRequest();
  }

  public render() {
    return (
      <div
        className="product-root-div"
      >
        <BackTop />
        <PrimaryMenu>
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
    products: state.product.products
  }
}

const mapDispatchToProps = (dispatch: any) => {
  return bindActionCreators({
    productGetRequest,
    productAddRequest,
    productRemoveRequest
  }, dispatch);
}

export default connect(mapStateToProps, mapDispatchToProps)(Home)
