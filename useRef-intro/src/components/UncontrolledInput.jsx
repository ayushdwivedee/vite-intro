import React, { useRef } from 'react';

function UncontrolledInput() {
  const inputRef = useRef(null);

  const handleInput = () => {
    alert(`Current value: ${inputRef.current.value}`);
  };

  return (
    <div>
      <h2>Uncontrolled Input</h2>
      <input ref={inputRef} type="text" placeholder="Type something" />
      <button onClick={handleInput}>Show Value</button>
    </div>
  );
}

export default UncontrolledInput;
