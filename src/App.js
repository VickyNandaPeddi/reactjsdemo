import UseStateTestHook from "./Component/UseStateTestHook";
import React, { useEffect, useState } from "react";
export const globalContext = React.createContext();
function App() {
  return (
    <div>
      <globalContext.Provider value="Hearererere">
        <UseStateTestHook></UseStateTestHook>
      </globalContext.Provider>
    </div>
  );
}

export default App;
