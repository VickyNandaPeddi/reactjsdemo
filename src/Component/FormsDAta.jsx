import React, { PureComponent } from "react";

class FormsDAta extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "fsdfsadfsa",
      number: 0,
    };
  }

  handleChange = (event) => {
    this.setState({
      name: event.target.value,
    });
  };
  handleSubmit = (event) => {
    alert(this.state.name);
  };
  render() {
    return (
      <div>
        <form className="textCenter" onSubmit={this.handleSubmit}>
          <span>name</span>
          <span>
            <input
              type="text"
              value={this.state.name}
              onChange={this.handleChange}
            />
          </span>

          <button type="submit">Submit data</button>
        </form>
      </div>
    );
  }
}

export default FormsDAta;
