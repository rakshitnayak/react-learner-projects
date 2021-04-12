import React from "react";
import CartItem from "./CartItem";

class cart extends React.Component {
  constructor() {
    super();
    this.state = {
      products: [
        {
          price: "RS " + 999,
          title: "Phone",
          qty: 1,
          image: "",
          id: 1,
        },
        {
          price: "RS " + 761,
          title: "Watch",
          qty: 1,
          image: "",
          id: 2,
        },
        {
          price: "RS " + 222,
          title: "Book",
          qty: 1,
          image: "",
          id: 3,
        },
        {
          price: "RS " + 111,
          title: "appy fiz",
          qty: 1,
          image: "",
          id: 4,
        },
      ],
    };
  }

  handleIncreaseQuantity = (product) => {
    console.log("hey please increase qty", product);
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products,
    });
  };

  render() {
    const { products } = this.state;
    return (
      <div className="cart">
        {products.map((product) => {
          return (
            <CartItem
              product={product}
              key={product.id}
              onIncreaseQuantity={this.handleIncreaseQuantity}
            />
          );
        })}
      </div>
    );
  }
}

export default cart;
