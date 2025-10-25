import React from "react";
import { ProductCounter } from "./ProductCounter";
const Counter = () => {
  const [count, setCount] = React.useState(0);
  return (
    <div>
      <ProductCounter totalApple={500} setTotalApple={55} />
      <h2>Counter: {count}</h2>
      <button onClick={() => setCount(count + 1)}>Increment </button>
      <button onClick={() => setCount(count - 1)}>Decrement </button>
    </div>
  );
};

export default Counter;
