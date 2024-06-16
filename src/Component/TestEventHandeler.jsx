import React from "react";

function TestEventHandeler() {
  function testClickButton() {
    console.log("clicked on button");
    alert("fdsfsdf")
  }
  return (
    <div>
      <button onClick={testClickButton}>Click testevejt </button>
    </div>
  );
}

export default TestEventHandeler;
