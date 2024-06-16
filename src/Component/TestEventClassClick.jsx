import React, { PureComponent } from "react";

class TestEventClassClick extends PureComponent {
  constructor(props) {
    super(props);

    this.state = {
      title: "fsdfsdfsafsafsdf",
    };
    this.testClassclickHAndler.bind(this);
  }

  testClassclickHAndler() {
    // this.setState({
    //   title: "fdsfsdfsdfsd",
    // });

    console.log("fsdfsdfdsf");
  }

  //use  arrow methods to  setState

  testevent = () => [
    this.setState({
      title: "fsdfsdfsdfsd",
    }),
  ];

  render() {
    return (
      <div>
        {this.state.title}
        <button onClick={this.testevent}>using bind </button>

        <button onClick={() => this.testClassclickHAndler()}>
          using method in event
        </button>
      </div>
    );
  }
}

export default TestEventClassClick;
