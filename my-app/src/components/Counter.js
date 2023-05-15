import { useState } from 'react';

export function Counter () {
    const [count, setCount] = useState(0);
  
    function AddClick () {
      setCount(count + 1);
    }
  
    function MinusClick () {
      setCount(count - 1);
    }
  
    return (
        <div>
        <p>Count: {count}</p>
        <button onClick={AddClick}>+1</button>
        <button onClick={MinusClick}>-1</button>
      </div>
    )
  }