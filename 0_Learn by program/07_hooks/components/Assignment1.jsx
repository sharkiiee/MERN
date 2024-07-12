// In this assignment, your task is to create a component that performs an expensive calculation (finding the factorial) based on a user input.

// Use useMemo to ensure that the calculation is only recomputed when the input changes, not on every render.
// wait for 2000 ms evertime input is changed i.e implement throtlling and deboucing.

import { useMemo, useState, useEffect } from "react";

export function Assignment1() {
  const [input, setInput] = useState(1);
  const [debouncedInput, setDebouncedInput] = useState(1);

  useEffect(() => {
    const handler = setTimeout(() => {
      setDebouncedInput(input);
    }, 2000);

    return () => {
      clearTimeout(handler);
    };
  }, [input]);

  // Expensive operation
  const expensiveValue = useMemo(() => {
    let value = 1;
    for (let i = 1; i <= debouncedInput; i++) {
      value = value * i;
    }
    return value;
  }, [debouncedInput]);

  return (
    <div>
      <input
        type="number"
        value={input}
        onChange={(e) => {
          setInput(Number(e.target.value));
        }}
      />
      <p>Factorial of {debouncedInput} is {expensiveValue}</p>
    </div>
  );
}