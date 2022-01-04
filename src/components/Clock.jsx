import { useState, useEffect } from 'react';

function Clock() {
  const [date, setDate] = useState(new Date());
  console.log(date);

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
      <p className="font-black text-right">{date.toLocaleTimeString()}</p>
    </div>
  );
}

export default Clock;
