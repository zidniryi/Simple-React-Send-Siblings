import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Child extends Component {

  getContent(event) {
  this.props.callback(event.target.value);
  }
  getContent2(event) {
    this.props.callback2(event.target.value);
    }
      render() {
          return (
              <div>
             <p>Child One</p>
              <input type="text" onChange={this.getContent.bind(this)} placeholder="Type Something in Child One"/>
              <p>Type Your Gender</p>
              <input type="text" onChange={this.getContent2.bind(this)} placeholder="Type Something in Child One"/>
              </div>
          );
      }
  }

  Child.protoTypes = {
    callback : PropTypes.func,
    callback2 : PropTypes.func,
    }
export default Child;