import React, { useRef } from 'react';

function ChangeColorBox() {
  const boxRef = useRef(null);

  const handleClick = () => {
    const newColor = boxRef.current.style.backgroundColor === 'yellow' ? 'lightblue' : 'yellow';
    boxRef.current.style.backgroundColor = newColor;
  };

  return (
    <div>
      <h2>Change Color Box</h2>
      <div
        ref={boxRef}
        onClick={handleClick}
        style={{ width: '200px', height: '200px', backgroundColor: 'lightblue', cursor: 'pointer' }}
      >
        Click me to change my color
      </div>
    </div>
  );
}

export default ChangeColorBox;
