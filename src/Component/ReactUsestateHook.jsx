import React, { useState } from "react";

function ReactUsestateHook() {
  const [count, setCount] = useState(0);

  return (
    <div>
      <div>{count}</div>
      <button onClick={() => setCount(count + 1)}>Increment</button>
      <button onClick={() => setCount(count - 1)}>decrement</button>
    </div>
  );
}

export default ReactUsestateHook;
