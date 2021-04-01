import React from "react";

class CartItem extends React.Component {
  constructor() {
    super();
    this.state = {
      price: "RS " + 999,
      title: "Phone",
      qty: 1,
      image: "",
    };
    //  this.increaseQuantity = this.increaseQuantity.bind(this); we should use this while we use normal functions. not necssary while using arrow functions
  }
  increaseQuantity = () => {
    console.log("this", this.state);
  };
  render() {
    const { price, title, qty } = this.state;
    return (
      <div className="cart-item">
        <div className="left-block">
          <img style={styles.image} />
        </div>
        <div className="right-block">
          <div style={{ fontSize: 50 }}>{title}</div>
          <div style={{ color: "#777" }}>{price}</div>
          <div style={{ color: "#777" }}>{qty}</div>
          <div className="cart-item-actions">
            {/* buttons */}

            <img
              src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1617283132~hmac=47d39eeb199eeffddb4df93bbb6d1f0e"
              className="action-icons"
              alt="increase"
              onClick={this.increaseQuantity}
            />
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1617283100~hmac=cc688418d68b44040f2be60cfa2480a2"
              className="action-icons"
              alt="decrease"
            />
            <img
              src="https://www.flaticon.com/premium-icon/icons/svg/2907/2907762.svg"
              className="action-icons"
              alt="delete"
            />
          </div>
        </div>
      </div>
    );
  }
}

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
