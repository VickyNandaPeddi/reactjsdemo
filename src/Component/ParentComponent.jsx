import React, { PureComponent } from "react";
import ChildComponent from "./ChildComponent";

class ParentComponent extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {};
    this.greetParentComponent = this.greetParentComponent.bind(this);
  }
  greetParentComponent(ffsdfds) {
    console.log("thisfasdfasdfasdfasd");
    alert("fdsfsdfds" + ffsdfds);
  }

  render() {
    return (
      <div className="text-center">
        <button onClick={this.greetParentComponent}>
          Parent Component Button
        </button>
        <br />
        <ChildComponent
          greetHandler={this.greetParentComponent}
        ></ChildComponent>
      </div>
    );
  }
}

export default ParentComponent;
