import React from "react";

import React, { PureComponent } from "react";

class LifecycleMethodsTest extends PureComponent {
  // Mounting :when  acomponent is being created and inserted into Dom

  // Updating :when a component is being rerendered as a result in change 	to  either its props or state

  // Unmounting : when a component is being removed from the Dom

  // ErrorHandling :when a error is happening during rendering,in a lifecycle method.

  // or in the constructor of any child component

  // Mounting:consutructor,static getDerivedStateFromProps,render and componentDidMount

  // Updating :getDerivedStateFromProps,shouldComponentUpdate,render,getsnapshotbeforeupdate and componentdidupdate

  // unmounting: componentwillunmount

  // errorhandling:static getDeriverStatefromerror,componentdidcatch

  constructor(props) {
    //a special  method will get called whenever a new compoenent is created
    //initialize state,bind event handler
    //dont use http request here
    //super(props) which directly overwrite this.state
    super(props);

    this.state = {};
  }

  static getDerivedStateFromProps() {
    //when the state of the component dependes on the change in props over time
    //method is called everytime component is rerendered
    //set the state
    //dont call httprequest
  }

  render() {
    //only required method

    //read props and return jsx

    //dont chagen state or interact with dom or ajax calls
    //children component lifcycle methods executes in this method

    return <div></div>;
  }

  componentDidMount() {
    //invoked immediately whenever the component and the child components rendered in dom
    //cause side effects :interact with dom or perform any ajax calls to load data
  }
}

export default LifecycleMethodsTest;
