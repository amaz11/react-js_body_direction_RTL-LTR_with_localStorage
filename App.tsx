import * as React from 'react';
import './style.css';

export default function App() {
  const [direction, setDirection] = React.useState(
    localStorage.getItem('direction')
  );
  const [dirStorage, setDirStorage] = React.useState(true);
  console.log(direction);
  const directionHandel = () => {
    // setDirection(pre=> pre ==="ltr"? "rtl":"ltr");
    if (direction === 'ltr' || direction === null) {
      localStorage.setItem('direction', 'rtl');
      const dir = localStorage.getItem('direction');
      setDirection(dir);
    } else {
      localStorage.setItem('direction', 'ltr');
      const dir = localStorage.getItem('direction');
      setDirection(dir);
    }
  };

  return (
    <div
      // className={`${direction ? 'drectionRTL' : 'directionLTR'}`}
      className="diectionRTl"
      dir={direction}
    >
      <h1>Hello StackBlitz!</h1>
      <p>Start editing to see some magic happen :)</p>
      <button onClick={directionHandel}>Change</button>
    </div>
  );
}
