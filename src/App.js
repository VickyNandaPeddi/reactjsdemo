import CountReducer from "./Component/CountReducer";
import UseStateTestHook from "./Component/UseStateTestHook";
import React, { useEffect, useState } from "react";
export const globalContext = React.createContext();
function App() {
  return (
    <div>
      <CountReducer></CountReducer>
    </div>
  );
}

export default App;
