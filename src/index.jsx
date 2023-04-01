import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import "./styles/index.css";
import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      <Counter></Counter>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
