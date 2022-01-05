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
    <div className="bg-gray-50/10 rounded-lg p-5">
      <p className=" text-4xl text-center" style={{ filter: `invert(100%)` }}>
        {date.toLocaleTimeString(navigator.language, {
          hour: '2-digit',
          minute: '2-digit',
        })}
      </p>
    </div>
  );
}

export default Clock;
