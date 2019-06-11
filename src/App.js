import React, { Component } from 'react';
import Child from './Child';
import Child2 from './Child2';


class App extends Component {
  constructor(){
    super();
    this.state= {
      data : ""
    }
  }
  
  formChild1(params) {
    this.setState({
      data : params
    })
  }
    render() {
      return(
        <div>
          <p>Parent</p>
        <Child callback={this.formChild1.bind(this)} />
        <Child2 data={this.state.data} />
        </div>
      );
    }
  }


App.propTypes = {

};

export default App;