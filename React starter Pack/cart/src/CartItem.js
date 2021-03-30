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
  }

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
              src="https://www.flaticon.com/svg/vstatic/svg/748/748113.svg?token=exp=1617128491~hmac=56696eb4ce80985304054c7e520167b7"
              className="action-icons"
              alt="increase"
            />
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/43/43625.svg?token=exp=1617128535~hmac=2f1a8068fa5fd991c75a4bdf71a15ad0"
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
