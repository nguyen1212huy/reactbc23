import React, { Component } from "react";

export default class DataBinding extends Component {
  product = {
    id: 1,
    name: "iphone",
    price: 1000,
    img: "https://i.pravatar.cc?u=77",
  };
  renderMessage = () => {
    return "Hello cybersoft"; //Noi dung tra ve phai la string, number,component (the bao phu)
  };

  renderCard = () => {
    return ( // Noi dung return cua ham phai chua trong 1 the bao phu
      <div className="card w-25">
      <img src={this.product.img} alt="..." />
      <div className="card-body">
        <p>{this.product.name}</p>
        <p>{this.product.price}</p>
        <button className="btn btn-danger">Add to cart</button>
      </div>
    </div>
    )
    
  };

  render() {
    let title = "cybersoft";
    return (
      <div className="container">
        <div>
          <p id="title">Ten Trung Tam: {title}</p>
          <hr />
          {this.renderCard()}
        </div>
      </div>
    );
  }
}
