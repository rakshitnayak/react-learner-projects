import React from "react";

class CartItem extends React.Component {
  //  this.increaseQuantity = this.increaseQuantity.bind(this); we should use this while we use normal functions. not necssary while using arrow functions
  // this.testing();

  // testing() {
  //   const promise = new Promise((resolve, reject) => {
  //     setTimeout(() => {
  //       resolve("done");
  //     }, 5000);
  //   });

  //   promise.then(() => {
  //     this.setState({ qty: this.state.qty + 10 });
  //     this.setState({ qty: this.state.qty + 10 });
  //     this.setState({ qty: this.state.qty + 10 });
  //     console.log("state", this.state);
  //   });
  // }

  increaseQuantity = () => {
    // console.log("this", this.state);

    //set state  form 1
    // this.setState({
    //   qty: this.state.qty + 1,
    // },()=>{});//second argument to remove asynchronous.

    //set state form 2
    this.setState((prevState) => {
      return {
        qty: prevState.qty + 1,
      };
    });
  };

  decreaseQuantity = () => {
    const { qty } = this.state;
    if (qty === 0) {
      return;
    }
    this.setState(
      (prevState) => {
        return {
          qty: prevState.qty - 1,
        };
      },
      () => {
        console.log("this", this.state); //to remove asynchronous this is given by react as a second argument.
      }
    );
  };

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
              src="https://www.flaticon.com/svg/vstatic/svg/992/992651.svg?token=exp=1617283132~hmac=47d39eeb199eeffddb4df93bbb6d1f0e"
              className="action-icons"
              alt="increase"
              onClick={this.increaseQuantity}
            />
            <img
              src="https://www.flaticon.com/svg/vstatic/svg/992/992683.svg?token=exp=1617283100~hmac=cc688418d68b44040f2be60cfa2480a2"
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
