import axios from "axios";
import React, { useEffect, useState } from "react";
import { json } from "react-router-dom";
import { globalContext } from "../App";
function UseStateTestHook() {
  const [ram, setRam] = useState([]);

  useEffect(() => {
    axios.get("https://jsonplaceholder.typicode.com/users").then((resp) => {
      console.log("resp" + JSON.stringify(resp));
      setRam(resp.data);
    });
  });
  return (
    <div>
      <globalContext.Consumer>
        {(user) => {
          return <div>user context value {user}</div>;
        }}
      </globalContext.Consumer>
      {/* {JSON.stringify(ram)} */}
      <h2>
        {ram.map((da) => {
          <span>{da.id}</span>;
        })}
      </h2>
    </div>
  );
}

export default UseStateTestHook;
