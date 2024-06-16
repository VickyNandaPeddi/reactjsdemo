import React, { PureComponent } from "react";

class LifeCycleB extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      name: "Lifecycle B",
    };

    console.log("constructor LifeCycleB ");
  }

  static getDerivedStateFromProps(props, state) {
    console.log("getDerivedStateFromProps LifeCycleB");
    return null;
  }
  componentDidMount() {
    console.log("component Did mount LifeCycleB");
  }
  shouldComponentUpdate(){
    console.log("should compoenent update LifecycleB ");
    return true;
  }

  getSnapshotBeforeUpdate(prevProps,prevState){
    console.log("getSnapshotBeforeUpdate lifecycle B");
  }
  componentDidUpdate(){
    console.log("componentDidUpdate lifecycle B");
  }
  render() {
    console.log("render method LifeCycleB");
    return (
      <div>
        <h2>{this.state.name}</h2>
      </div>
    );
  }
}

export default LifeCycleB;
