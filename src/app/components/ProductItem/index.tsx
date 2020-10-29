import * as React from 'react';
import "./index.css";

import {
  BASE_API,
  PRODUCT_IMAEG_BASE_API
} from './../../Configs';

export interface IProductItemProps {
    id: any;
    name: any;
    imgUrl: any;
    description: any;
    availableCount: any;
    unitPrice: any;
    counterfiet: any;
    addToCart: any;
}

export interface IProductItemState {
}

export class ProductItem extends React.Component<IProductItemProps, IProductItemState> {
  constructor(props: IProductItemProps) {
    super(props);

    this.state = {
    }

    this.addToCart = this.addToCart.bind(this);
  }

  addToCart = () => {
    this.props.addToCart({
      productId: this.props.id,
      productCount: 1,
      totalPrice: 1 * this.props.unitPrice
    })
  }

  public render() {
    return (
      <div
        className="product-item-root-div product-item-shadow-effect"
      >
        <img   
            src={`${PRODUCT_IMAEG_BASE_API}${this.props.imgUrl}`}
            height={100}
            width={'auto'}
            style={{
              backgroundPosition: 0
            }}
        />
        <span>{this.props.name}</span>
        <span
          className="product-item-description"
        >{this.props.description}</span>
        <span>$ {this.props.unitPrice}</span>
        {/* <span>{this.props.counterfiet}</span> */}
        <button
          type="button"
          className="btn btn-success add-to-cart-button"  
          onClick={this.addToCart}
        >
          Add to cart
        </button>
      </div>
    );
  }
}

export default ProductItem;
