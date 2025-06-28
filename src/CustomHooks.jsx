import React from 'react'
import useToggle from './useToggle';

const CustomHooks = () => {
  const [isVisible, toggleVisibility] = useToggle();

  return (
    <div>
      <button onClick={toggleVisibility}>Toggle</button>
      {isVisible && <p>This is visible!</p>}
    </div>
  );
}

export default CustomHooks
