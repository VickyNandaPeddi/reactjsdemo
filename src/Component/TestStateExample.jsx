import React, { PureComponent } from "react";

class TestStateExample extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: "nnadnafdkishpre",
    };
  }
  changeTitleValue() {
    this.setState({
      title: "this is changge title" + 1,
    });
  }

  render() {
    return (
      <div>
        <h2>{this.state.title}</h2>

        <button onClick={() => this.changeTitleValue()}>change title</button>
      </div>
    );
  }
}

export default TestStateExample;
