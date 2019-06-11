import React, { Component } from 'react';

export default class Child2 extends Component {
  render() {
    return(
        <div>
        <p>Child2 : {this.props.data}</p>
        <p>I am Male is: {this.props.data2}</p>
        </div>
    );
  }
}
