import React from "react";

export const ProductCounter = ({ totalApple, setTotalApple }) => {
  return (
    <div>
      ProductCounter
      <h1>Here is {totalApple}</h1>
      <h2>{setTotalApple}</h2>
    </div>
  );
};
