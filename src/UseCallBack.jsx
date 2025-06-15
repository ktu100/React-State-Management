import React, { useState, useCallback } from 'react';

// A child component that only re-renders when props change
const Button = React.memo(({ handleClick, label }) => {
  console.log(`Rendering button: ${label}`);
  return <button onClick={handleClick}>{label}</button>;
});

const UseCallback = () => {
  const [count, setCount] = useState(0);
  const [other, setOther] = useState(100);

  // Memoized function
  const increment = useCallback(() => {
    setCount((prev) => prev + 1);
  }, []);

  const changeOther = () => {
    setOther((prev) => prev + 10);
  };

  return (
    <div>
      <h2>Count: {count}</h2>
      <Button handleClick={increment} label="Increment Count" />
      <Button handleClick={changeOther} label="Change Other State" />
    </div>
  );
};

export default UseCallback;
