import React, { PureComponent } from "react";

class Counter extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      count: 0,
    };
  }

  incrementValue() {
    this.setState((prevState) => ({
      count: prevState.count + 1,
    }));
    console.log(this.state.count);
  }
  incrementFivetimes() {
    this.incrementValue();
    this.incrementValue();
    this.incrementValue();
    this.incrementValue();
    this.incrementValue();
  }

  render() {
    return (
      <div>
        <h3>value of count is {this.state.count}</h3>

        <br />
        <button onClick={() => this.incrementValue()}>increment</button>
        <br />
        <button onClick={() => this.incrementFivetimes()}>
          increment five
        </button>
      </div>
    );
  }
}

export default Counter;
