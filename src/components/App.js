import React from "react";
import "./../styles/App.css";
import { useState } from "react";

const App = () => {
  const [sum, setSum] = useState(0);

  return (
    <div>
      {/* Do not remove the main div */}
      <h1>Sum Calculator</h1>
      <input
        type="number"
        onChange={(e) => {
          setSum(sum + Number(e.target.value));
        }}
      />
      <p>Sum: {sum}</p>
    </div>
  );
};

export default App;
