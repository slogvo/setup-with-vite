import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(0);

  const handleIncrement = () => {
    setCount((prevCount) => prevCount + 1);
  };

  const handleDecrement = () => {
    setCount((prevCount) => prevCount - 1);
  };

  return (
    <div>
      <div>Count: {count}</div>
      <button onClick={handleIncrement}>Tăng</button>
      <button onClick={handleDecrement}>Giảm</button>
    </div>
  );
}

export default Counter;
