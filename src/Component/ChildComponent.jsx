import React from "react";

function ChildComponent(props) {
  return (
    <div>
      <button onClick={()=>props.greetHandler('damn')}>Greet Parent In Child Button</button>
    </div>
  );
}

export default ChildComponent;
