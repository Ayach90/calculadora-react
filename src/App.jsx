/*eslint no-eval:0*/

import React, { useState } from "react";
import words from "lodash.words";
import "./App.css";
import Functions from "./components/Functions";
import MathOperations from "./components/MathOperations";
import Numbers from "./components/Numbers";
import Result from "./components/Result";

const App = () => {
  const [stack, setStack] = useState("");

  const items = words(stack, /[^-^+^*^/]+/g);

  return (
    <main className="react-calculator">
      <Result value={items[items.length - 1] || 0} />
      <Numbers
        onClickNumber={(number) => {
          console.log("Number clicked", number);
          setStack(`${stack}${number}`);
        }}
      />
      <Functions
        onContentClear={() => {
          console.log("Content cleared");
          setStack("");
        }}
        onDelete={() => {
          if (stack.length > 0) {
            console.log("OnDelete");
            const newStack = stack.substring(0, stack.length - 1);
            setStack(newStack);
          }
        }}
      />
      <MathOperations
        onClickOperation={(operation) => {
          console.log("Operation", operation);
          setStack(`${stack}${operation}`);
        }}
        onClickEqual={(equal) => {
          console.log("equal:", equal);
          setStack(eval(stack).toString());
        }}
      />
    </main>
  );
};

export default App;
