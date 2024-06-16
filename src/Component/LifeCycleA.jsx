import React, { PureComponent } from "react";
import LifeCycleB from "./LifeCycleB";

class LifeCycleA extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Lifecycle A ",
    };

    console.log("constructor lifecycle A ");
  }
  changeState = () => {
    this.setState({
      name: "changedstate",
    });
  };
  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps LifecycleA");
    return null;
  }
  componentDidMount() {
    console.log("component Did mount Lifecycle A");
  }

  shouldComponentUpdate() {
    console.log("should compoenent update A");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("getSnapshotBeforeUpdate lifecycle A");
  }
  componentDidUpdate() {
    console.log("componentDidUpdate lifecycle A");
  }

  render() {
    console.log("render method Lifecycle A");
    return (
      <div>
        <LifeCycleB></LifeCycleB>
        <h2>{this.state.name}</h2>
        <button onClick={this.changeState}>Change NAme VAlue</button>
      </div>
    );
  }
}

export default LifeCycleA;
