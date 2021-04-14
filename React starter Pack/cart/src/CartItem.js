import React from "react";

const CartItem = (props) => {
  const { price, title, qty } = props.product;
  const {
    product,
    onIncreaseQuantity,
    onDecreaseQuantity,
    onDeleteProduct,
  } = props;
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
            src="https://www.flaticon.com/svg/vstatic/svg/1828/1828921.svg?token=exp=1618383646~hmac=e6db33f0565b1901bffdb07f0ce88022"
            className="action-icons"
            alt="increase"
            onClick={() => onIncreaseQuantity(product)}
          />
          <img
            src="https://www.flaticon.com/premium-icon/icons/svg/2801/2801932.svg"
            className="action-icons"
            alt="decrease"
            onClick={() => onDecreaseQuantity(product)}
          />
          <img
            src="https://www.flaticon.com/premium-icon/icons/svg/2907/2907762.svg"
            className="action-icons"
            alt="delete"
            onClick={() => onDeleteProduct(product.id)}
          />
        </div>
      </div>
    </div>
  );
};

const styles = {
  image: {
    height: 110,
    width: 110,
    borderRadius: 4,
    background: "#ccc",
  },
};

export default CartItem;
