import * as React from 'react';
import "./index.css";
import {
  Popconfirm
} from 'antd';
import {
  DeleteTwoTone,
  PlusOutlined,
  MinusOutlined
} from '@ant-design/icons';

import {
  BASE_API,
  PRODUCT_IMAEG_BASE_API
} from './../../Configs';

export interface ICartItemProps {
  id: any;
  name: any;
  imgUrl: any;
  description: any;
  availableCount: any;
  unitPrice: any;
  counterfiet: any;
  productCount: any;
  totalPrice: any;
}

export interface ICartItemState {
}

export class CartItem extends React.Component<ICartItemProps, ICartItemState> {
  constructor(props: ICartItemProps) {
    super(props);

    this.state = {
    }
  }

  removeCart = () => {

  }

  incrementCartItemCount = () => {

  }

  decrementCartItemCount = () => {

  }

  public render() {
    return (
      <div
        className="cart-item-root-div cart-item-shadow-effect"
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
          className="cart-item-description"
        >{this.props.description}</span>
        <span>$ {this.props.unitPrice}</span>
        <span>{this.props.productCount}</span>
        <span>{this.props.totalPrice}</span>
        <div
          style={{
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-around',
            alignItems: 'center',
            flex: 1,
            width: "100%"
          }}
        >
          <div
            className={"row"}
            style={{
              flex: 0.8,
              justifyContent: 'center',
              // alignItems: 'center'
            }}
          >
            <button
              type="button"
              className="btn btn-danger col-3"
              onClick={this.incrementCartItemCount}
            >
              <MinusOutlined />
            </button>
            <input
              // className="col-3"
              style={{
                width: 30,
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                textAlign: 'center'
              }}
              disabled
              value={this.props.productCount}
              onClick={this.decrementCartItemCount}
            />
            <button
              type="button"
              className="btn btn-success col-3"
            >
              <PlusOutlined />
            </button>
          </div>

          <Popconfirm
            title="Are you sure delete this cart?"
            onConfirm={this.removeCart}
            okText="Yes"
            cancelText="No"
            style={{
              flex: 0.2
            }}
          >
            <DeleteTwoTone
              style={{
                fontSize: 26
              }}
              twoToneColor="red"
            />
          </Popconfirm>
        </div>
      </div>
    );
  }
}

export default CartItem;
