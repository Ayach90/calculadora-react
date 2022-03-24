import React from "react";
import "./App.css";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Result from "./components/Result";

const App = () => {
  const clickHandler = (text) => {
    console.log(text);
  };
  return (
    <main className="react-calculator">
      <Result value="0" />
      <Numbers
        onClickNumber={(number) => console.log("Number clicked", number)}
      />
      <Functions
        onContentClear={(clear) => console.log("Content cleared")}
        onDelete={() => {
          console.log("OnDelete");
        }}
      />
      <MathOperations
        onClickOperation={(operation) => {
          console.log("Operation", operation);
        }}
        onClickEqual={(equal) => console.log("equal:", equal)}
      />
    </main>
  );
};

export default App;
