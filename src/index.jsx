import React from "react";
import ReactDOM from "react-dom";
import "./styles/styles.css";
import "./styles/index.css";
import ExampleComponent from "./components/ExampleComponent";
// import Counter from "./components/Counter";

const App = () => {
  return (
    <div>
      <ExampleComponent name={"Long"}></ExampleComponent>
    </div>
  );
};

ReactDOM.render(<App />, document.getElementById("root"));
