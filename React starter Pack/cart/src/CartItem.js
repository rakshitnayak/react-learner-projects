import React from "react";

class CartItem extends React.Component {
  render() {
    const { price, title, qty } = this.props.product;
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
              src="https://www.flaticon.com/svg/vstatic/svg/1237/1237946.svg?token=exp=1618208682~hmac=363d70cc285adb5f5951fd1e618eb6dd"
              className="action-icons"
              alt="increase"
              onClick={() => this.props.onIncreaseQuantity(this.props.product)}
            />
            <img
              src="https://www.flaticon.com/premium-icon/icons/svg/2801/2801932.svg"
              className="action-icons"
              alt="decrease"
              onClick={this.decreaseQuantity}
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
