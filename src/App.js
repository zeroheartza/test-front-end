
import './App.css';
import React from "react";



import { CircularProgressbar } from "react-circular-progressbar";
import "react-circular-progressbar/dist/styles.css";

import ProgressProvider from "./ProgressProvider";
function App() {
  const [valueEnd, setValueEnd] = React.useState(0);
  return (
    <div style={{ padding: "600px 600px 600px 600px", margin: "auto" }}>
     
        <ProgressProvider valueStart={10} valueEnd={valueEnd}>
          {value => <CircularProgressbar value={value} text={`${value}%`} />}
        </ProgressProvider>

      <button onClick={() => setValueEnd(valueEnd+5)}>+</button>
      <button onClick={() => setValueEnd(valueEnd-5)}>-</button>
    </div>
  );
}

export default App;
