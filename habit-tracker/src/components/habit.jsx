import React , {useState} from 'react';

const Habit = () => {
  const [count , setCount] = useState(0);
  const handleIncrement = () => {
    setCount((count) => count + 1);
  }
  const handleDecrease = () => {
    setCount((count) => count <= 0 ? 0 : count - 1);
  }
  return (
    <li className='habit'>
    <span className='habit-name'>Reading</span>
    <span className='habit-count'>{count}</span>
    <button className='habit-button habit-increase' onClick={handleIncrement}>
      <i className="fas fa-plus-square"></i>
    </button>
    <button className='habit-button habit-decrease' onClick={handleDecrease}>
      <i className="fas fa-minus-square"></i>
    </button>
    <button className='habit-button habit-delete'>
      <i className="fas fa-trash"></i>
    </button>
    </li>
  );
};

export default Habit;