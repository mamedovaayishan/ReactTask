import React, { useState } from 'react';

function Counter() {
  const [count, setCount] = useState(0);

  const increment = () => {
    setCount(count + 1);
  };

  const decrement = () => {
    if (count > -10) {
      setCount(count - 1);
    }
  };

  return (
    <div>
      <h1>Counter</h1>
      <p>Count: {count}</p>
      <button onClick={increment}>Incremen</button>
      <button onClick={decrement}>Decrement</button>
    </div>
  );
}

export default Counter;
