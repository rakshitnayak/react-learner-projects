import { render } from "@testing-library/react";
import React, { Component } from "react";

import Cart from "./Cart";

import Navbar from "./Navbar";

class App extends Component {
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

  getCartCount = () => {
    const { products } = this.state;
    let count = 0;

    products.forEach((product) => {
      count += product.qty;
    });
    return count;
  };

  render() {
    const { products } = this.state;
    return (
      <div className="App">
        <Navbar count={this.getCartCount()} />
        <Cart
          products={products}
          onIncreaseQuantity={this.handleIncreaseQuantity}
          onDecreaseQuantity={this.handleDecreaseQuantity}
          onDeleteProduct={this.handleDeleteProduct}
        />
      </div>
    );
  }
}

export default App;
