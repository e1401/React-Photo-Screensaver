import { useState, useEffect } from 'react';

function Clock() {
  const [date, setDate] = useState(new Date());

  function refreshClock() {
    setDate(new Date());
  }

  useEffect(() => {
    const timerId = setInterval(refreshClock, 1000);
    return function cleanUp() {
      clearInterval(timerId);
    };
  }, []);

  return (
    <div>
      <p className="font-black text-5xl text-center">{date.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
