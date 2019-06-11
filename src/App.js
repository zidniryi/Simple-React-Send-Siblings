import React, { Component } from 'react';
import Child from './Child';
import Child2 from './Child2';


class App extends Component {
  constructor(){
    super();
    this.state= {
      data : "",
      data2: ""
    }
  }
  
  formChild1(params) {
    this.setState({
      data : params,
    })
  }

  formChild2(params2) {
    this.setState({
      data2 : params2,
    })
  }
    render() {
      return(
        <div>
          <p>Parent</p>
        <Child callback={this.formChild1.bind(this)}  callback2={this.formChild2.bind(this)}/>
        <Child2 data={this.state.data} data2={this.state.data2}/>
        </div>
      );
    }
  }


App.propTypes = {

};

export default App;