import React from "react";
import { connect } from "react-redux";
import { createStructuredSelector } from "reselect";

import {
  selectCartItems,
  selectCartTotal,
} from "../../redux/cart/cart.selectors";
import { removeItemFromCart } from "../../redux/cart/cart.actions";

import "./checkout.styles.scss";

const CheckoutPage = ({ cartItems, total, removeItem }) => (
  <div className="checkout-page">
    <div className="checkout-header">
      <div className="header-block">
        <span>Product</span>
      </div>
      <div className="header-block">
        <span>Description</span>
      </div>
      <div className="header-block">
        <span>Quantity</span>
      </div>
      <div className="header-block">
        <span>Price</span>
      </div>
      <div className="header-block">
        <span></span>
      </div>
      <div className="header-block">
        <span>Remove</span>
      </div>
    </div>
    <div className="">
      {cartItems.map((cartItem) => (
        <div key={cartItem.id}>{cartItem.name}</div>
      ))}
    </div>
    <div className="total">
      <span>TOTAL ${total}</span>
    </div>
  </div>
);

const mapDispatchToProps = (dispatch) => ({
  removeItem: (cartItem) => dispatch(removeItemFromCart(cartItem)),
});

const mapStateToProps = createStructuredSelector({
  cartItems: selectCartItems,
  total: selectCartTotal,
});

export default connect(mapStateToProps, mapDispatchToProps)(CheckoutPage);
