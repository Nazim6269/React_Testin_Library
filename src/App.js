import { useState } from "react";
import "./App.css";

function App() {
  const [color, setColor] = useState("red");
  const [text, setText] = useState("click me");

  const handleClick = () => {
    if (color === "red") {
      setColor("blue");
      setText("changed to blue");
    }
    if (color === "blue") {
      setColor("red");
      setText("click me");
    }
  };
  return (
    <div className="App">
      <button style={{ backgroundColor: color }} onClick={handleClick}>
        {text}
      </button>
    </div>
  );
}

export default App;
