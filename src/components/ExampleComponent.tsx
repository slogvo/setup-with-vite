import React, { useState } from "react";

interface Props {
  name: string;
}

const ExampleComponent: React.FC<Props> = ({ name }) => {
  const [count, setCount] = useState<number>(0);

  const handleClick = (): void => {
    setCount(count + 1);
  };

  return (
    <div>
      <h1>Hello, {name}!</h1>
      <p>You clicked {count} times.</p>
      <button onClick={handleClick}>Click me</button>
    </div>
  );
};

export default ExampleComponent;
