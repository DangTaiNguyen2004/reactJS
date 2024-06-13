import React, { Component } from "react";

export default class DtnProductAdd extends Component {
  constructor(props) {
    super(props);
    this.state = {
      dtn_productId: "0",
      dtn_productName: "Phone",
      dtn_quantity: 0,
      dtn_price: 0,
    };
  }
  dtnHandleChange = (e) => {
    let name = e.target.name;
    let value = e.target.value;
    this.setState({ [name]: value });
  };
  dtnHandleSubmit = (e) => {
    e.preventDefault();
    this.props.onSubmit(this.state);
  };
  render() {
    return (
      <div>
        <form className="col-md-6">
          <div className="input-group mb-3 ">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon1">
                Product Id
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="dtn_productId"
              value={this.state.dtn_productId}
              aria-label="Username"
              aria-describedby="basic-addon1"
              onChange={this.dtnHandleChange}
            />
          </div>
          <div className="input-group mb-3 ">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon2">
                Product Name
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="dtn_productName"
              value={this.state.dtn_productName}
              onChange={this.dtnHandleChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                Quantity
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="dtn_quantity"
              value={this.state.dtn_quantity}
              onChange={this.dtnHandleChange}
            />
          </div>
          <div className="input-group mb-3">
            <div className="input-group-prepend">
              <span className="input-group-text" id="basic-addon3">
                Price
              </span>
            </div>
            <input
              type="text"
              className="form-control"
              name="dtn_price"
              value={this.state.dtn_price}
              onChange={this.dtnHandleChange}
            />
          </div>
          <button className="btn btn-success" onClick={this.dtnHandleSubmit}>
            Ghi lại
          </button>
        </form>
      </div>
    );
  }
}
