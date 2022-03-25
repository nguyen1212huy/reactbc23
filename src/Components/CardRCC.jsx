// Cu phap tao nhanh 1 react class component
import React, { Component } from 'react'
// Viet hoa ten file component
export default class CardRCC extends Component {

    //Phuong thuc render se la phuong thuc dinh nghia giao dien cua the nay
  render() {
    return (
      <div className='card w-25'>
          <img src="https://i.pravatar.cc?u=1" alt="" />
          <div className='card-body'>
              <p>Iphone</p>
              <p>1.000</p>
              <button className='btn btn-success'>Add to cart</button>
          </div>
      </div>
    )
  }
}
