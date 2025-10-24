import { useState } from "react";

const App = () => {
  const totalProduct = 10;
  const [rightButton, setRightButton] = useState(0);
  const [leftButton, setLeftButton] = useState(totalProduct - rightButton);

  const leftHandler = () => {
    setRightButton(rightButton - 1);
    setLeftButton(leftButton + 1);
  };
  const rightHandler = () => {
    setRightButton(rightButton + 1);
    setLeftButton(leftButton - 1);
  };

  return (
    <div>
      <h1>Hello, React!</h1>
      <p>Welcome to your React application.</p>
      <div className="flex mt-6 bg-amber-500">
        <div className="px-65">
          <button onClick={leftHandler}>Left Button</button>
          <span>{leftButton}</span>
        </div>
        <div className="px-80 bg-blue-800">
          <button onClick={rightHandler}>Right Button</button>
          <span>total product : {rightButton}</span>
        </div>
      </div>
    </div>
  );
};

export default App;
