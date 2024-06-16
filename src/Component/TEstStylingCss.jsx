import React from "react";
import "./Style.css";
function TEstStylingCss(props) {
  let primary = props.primary ? "primary" : "";
  let data = {
    fontSize: "10px",
    color: "red",
  };
  return (
    <div>
      <h1 className={primary}>fist style h2 </h1>

      <p style={data}>
        Lorem ipsum dolor sit amet consectetur, adipisicing elit. Totam ipsum
        inventore ad laudantium qui sapiente doloremque! Ipsa placeat amet
        maxime at aliquam? Maxime animi velit cupiditate amet adipisci vero
        ipsum.
      </p>

      <button className="btn btn-secoundary">fsdfasdfdasfasdfsad</button>
    </div>
  );
}

export default TEstStylingCss;
