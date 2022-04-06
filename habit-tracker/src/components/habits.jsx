import React, {useState} from 'react';
import Habit from './habit';

const Habits = () => {
  const initHabits = [
    {id:1, name: 'Reading', count:0},
    {id:2, name: 'Running', count:0},
    {id:3, name: 'Coding', count:0},
  ]
  const [habits, setHabits] = useState(initHabits);
  const handleIncrement = (habit) => {
    const updateHabit = [...habits];
    const index = updateHabit.indexOf(habit);
    updateHabit[index].count++;
    setHabits(updateHabit);
  }
  const handleDecrease = (habit) => {
    const updateHabit = [...habits];
    const index = updateHabit.indexOf(habit);
    if(updateHabit[index].count <= 0 ) return 0;
    updateHabit[index].count--;
    setHabits(updateHabit);
  }
  const handleDelete = (habit) => {
    const updateHabit = [...habits];
    const index = updateHabit.indexOf(habit);
    updateHabit.splice(index,1);
    setHabits(updateHabit);
  }
  return (
    <ul>
      {habits.map((item) => ( 
        <Habit habit={item} key={item.id} onIncrement={handleIncrement} onDecrement={handleDecrease} onDelete={handleDelete}/>
      ))}
    </ul>
  );
};

export default Habits;