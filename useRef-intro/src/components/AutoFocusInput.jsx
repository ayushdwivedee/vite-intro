import React, { useEffect, useRef } from 'react';

function AutoFocusInput() {
  const inputRef = useRef(null);

  useEffect(() => {
    inputRef.current.focus();
  }, []);

  return (
    <div>
      <h2>Auto Focus Input</h2>
      <input ref={inputRef} type="text" placeholder="Focus on mount" />
    </div>
  );
}

export default AutoFocusInput;
