import React, { Component } from 'react'

export default class HandleEvent extends Component {
    showMess = () => {
        alert('Hello hello')
    }

    sayHello = (name) => {
        alert ('hello !!!' + name)
    }
  render() {
    return (
      <div className='container'>
          <button onClick={this.showMess}>Click me!</button>
          <button onClick={() =>  alert('Hello hello')}>Click me!</button>
          <hr />
          <button onClick={this.sayHello.bind(this,'Tung')}>Say Hello</button>
          <button onClick={() => {
              this.sayHello('Tram')
          }}>Say Hello</button>
      </div>
    )
  }
}

// function main () {
//     return function () {
//         alert(123);
//     }
// }

// let result = main();
// result();