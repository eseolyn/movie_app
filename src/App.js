//import PropTypes from "prop-types";
import React from "react";

// react can save dynamic data in state

class App extends React.Component {
  state = {
    count: 0,
  };
  // 외부 상태에 의존하지 않도록 use ‘current’
  add = () => {
    this.setState((current) => ({ count: current.count + 1 }));
  };
  minus = () => {
    this.setState((current) => ({ count: current.count - 1 }));
  };
  render() {
    return (
      <div>
        <h1>The number is: {this.state.count}</h1>
        <button onClick={this.add}>Add</button>
        <button onClick={this.minus}>Minus</button>
      </div>
    );
  }
}

export default App;
