import React, { useEffect, useRef, useState } from 'react';
import './Timer.css';


const Timer = () => {

  const [seconds, setSeconds] = useState(0);
  const [active, setActive] = useState(false);
  const [type, setType] = useState('Counter');

  const toggle = () => { setActive(!active) };
  const reset = () => { setSeconds(0); setActive(false) };
  const myRef = useRef(null);
  const changeType = () => { type === 'Counter' ? setType('Countdown') : setType('Counter') }
  const addSeconds = () => {
    let value = myRef.current.value;
    setSeconds(value);
  }

  useEffect(() => {
    let interval;
    if (active && type === 'Counter') {
      interval = setInterval(() => {
        setSeconds(prev => prev + 1)
      }, 1000);
    }

    if (active && type === 'Countdown') {
      interval = setInterval(() => {
        setSeconds(prev => prev - 1)
      }, 1000);
    }

    if (!active && seconds !== 0 && type === 'Counter') {
      clearInterval(interval);
    }

    if (seconds === 0 && type === 'Countdown') {
      reset();
      clearInterval(interval);
    }

    return () => clearInterval(interval);

  }, [active, seconds, type])

  return (
    <div className="app">
      <div className='time'>{seconds} seg</div>
      <div className='row'>
        <button className={`button button-primary button-primary-${active ? 'active' : 'inactive'}`}
          onClick={toggle}>
          {active ? 'Pause' : 'Start'}
        </button>
        <button className='button-secondary' onClick={reset}>
          Reset
        </button>
      </div>
      <button className='button' onClick={changeType}>{type}</button>
      {
        type === 'Countdown' &&
        <input
          onChange={addSeconds}
          type='number'
          ref={myRef}
          placerholder='Enter Second'
          autoComplete='off'
        />
      }

    </div>
  );
};

export default Timer;
