import React, { useState } from "react";
import "./css/style.css";

function App() {
  const [count, setCount] = useState(0);

  return (
    <>
      <button onClick={() => setCount((count) => count + 1)}>Increment</button>
      {count}
    </>
  );
}

export default App;
