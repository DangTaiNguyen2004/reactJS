import React, { Component } from "react";
import DtnListProduct from "./components/DtnListProducts.js";
import DtnProductAdd from "./components/DtnProductAdd.js"

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dtn_Products: [
        {
          dtn_productId: "msv",
          dtn_productName: "họ và tên sinh viên",
          dtn_quantity: 15,
          dtn_price: 1000,
        },
        {
          dtn_productId: "P002",
          dtn_productName: "IPhone 12",
          dtn_quantity: 20,
          dtn_price: 1250,
        },
        {
          dtn_productId: "P003",
          dtn_productName: "IPhone 13",
          dtn_quantity: 10,
          dtn_price: 1500,
        },
      ],
    };
  }
  dtnHandleSubmit = (par) => {
    let { dtn_Products } = this.state;

    dtn_Products.push(par);
    this.setState({
      dtn_Products: dtn_Products,
    });
  };

  render() {
    return (
      <div>
        <h2 className="titleName">Đặng Tài Nguyên - 2210900052</h2>
        <DtnListProduct dtnRenderList={this.state.dtn_Products} />
        <hr />
        <DtnProductAdd onSubmit={this.dtnHandleSubmit} />
      </div>
    );
  }
}
