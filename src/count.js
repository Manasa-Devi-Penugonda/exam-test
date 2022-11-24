import React from 'react'
import {useState} from 'react';
import './count.css';
const Counter = () => {
    const [count, setcount] = useState(0);
    return (
    <center>
      <div className='card'>
     <h1>counter</h1>
     <p>count:{count}</p>
     <button className="button" onClick={()=> setcount(count+3)}>Increment</button>
     <button className='button' onClick={()=> setcount(count-3)}>Decrement</button>
     </div>
     </center>
  );
}

export default Counter
