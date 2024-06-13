import React, { Component } from "react";

export default class DtnListProduct extends Component {
  render() {
    let { dtnRenderList } = this.props;

    let dtnElList = dtnRenderList.map((item, i) => {
      return (
        <>
          <tr key={i}>
            <td>{item.dtn_productId}</td>
            <td>{item.dtn_productName}</td>
            <td>{item.dtn_quantity}</td>
            <td>{item.dtn_price}</td>
          </tr>
        </>
      );
    });
    return (
      <div>
        <div>
          <table className="table table-bordered">
            <thead>
              <tr>
                <th>Product Id</th>
                <th>Product Name</th>
                <th>Quantity</th>
                <th>Price</th>
              </tr>
            </thead>
            <tbody>{dtnElList}</tbody>
          </table>
        </div>
      </div>
    );
  }
}
