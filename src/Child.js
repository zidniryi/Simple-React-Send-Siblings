import React, { Component } from 'react';
import PropTypes from 'prop-types';

class Child extends Component {

  getContent(event) {
  this.props.callback(event.target.value);
  }
  
      render() {
          return (
              <div>
                  <p>Child One</p>
              <input type="text" onChange={this.getContent.bind(this)} placeholder="Type Something in Child One"/>
              </div>
          );
      }
  }

  Child.protoTypes = {
    callback : PropTypes.func,
    }
export default Child;