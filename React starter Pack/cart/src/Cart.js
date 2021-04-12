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
    const { products } = this.state;
    const index = products.indexOf(product);

    products[index].qty += 1;

    this.setState({
      products,
    });
  };

  handleDecreaseQuantity = (product) => {
    const { products } = this.state;
    const index = products.indexOf(product);

    if (products[index].qty === 0) {
      return;
    } else {
      products[index].qty -= 1;
    }

    this.setState({
      products,
    });
  };

  handleDeleteProduct = (id) => {
    const { products } = this.state;

    const items = products.filter((item) => item.id !== id); //[{contains products which is not equal to id that is passed}]

    this.setState({
      products: items,
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
              onDecreaseQuantity={this.handleDecreaseQuantity}
              onDeleteProduct={this.handleDeleteProduct}
            />
          );
        })}
      </div>
    );
  }
}

export default cart;
