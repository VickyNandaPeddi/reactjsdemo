import React, { useReducer } from "react";

function CountReducer() {
  const reducer = (state, action) => {
    switch (action) {
      case "increment":
        return state + 1;

      case "decrement":
        return state - 1;

      case "reset":
        return 0;
    }
  };
  const [count, dispatch] = useReducer(reducer, 0);

  return (
    <div>
      <h1> {count}</h1>
      <button onClick={()=>{dispatch('increment')}}>increment</button>
      <button onClick={()=>{dispatch('decrement')}}>decrement</button>
      <button onClick={()=>{dispatch('reset')}}>reset</button>
    </div>
  );
}

export default CountReducer;
