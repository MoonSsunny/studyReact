import React, {useCallback, useState} from 'react';
import Habit from './habit';
import styled from 'styled-components';
import InputBox from './inputBox';
import Navbar from './navbar';
import Button from './button';

const StyledUl = styled.ul`
  width: 1000px;
  margin: 0 auto;
  padding: 30px;
`

const Habits = () => {
  const initHabits = [
    {id:1, name: 'Reading', count:0},
    {id:2, name: 'Running', count:0},
    {id:3, name: 'Coding', count:0},
  ]
  const [habits, setHabits] = useState(initHabits);
  const [totalHabit, setTotalHabit] = useState(0);


  const handleIncrement = useCallback((habit) => {
    const updateHabit = [...habits];
    const index = updateHabit.indexOf(habit);
    updateHabit[index].count++;
    setHabits(updateHabit);
    setTotalHabit((totalHabit) => totalHabit + 1);
  })
  const handleDecrease = useCallback((habit) => {
    const updateHabit = [...habits];
    const index = updateHabit.indexOf(habit);
    if(updateHabit[index].count <= 0 ) return 0;
    updateHabit[index].count--;
    setHabits(updateHabit);
    setTotalHabit((totalHabit) => totalHabit - 1);
  })
  const handleDelete = useCallback((habit) => {
    const updateHabit = [...habits];
    const index = updateHabit.indexOf(habit);
    updateHabit.splice(index,1);
    let value = 0;
    updateHabit.forEach(item => {
      value += item.count;
    });
    setHabits(updateHabit);
    setTotalHabit(value);
  })
  const changeCount = useCallback(() => {
    const changeHabit = [...habits];
    changeHabit.forEach((item)=>{
      item.count = 0;
    })
    setHabits(changeHabit);
    setTotalHabit(0);
  })

  const addHabit = useCallback((item) => {
    const add = [...habits];
    add.push({
      id: add.length +1,
      name: item,
      count: 0,
    })
    setHabits(add);
  })

  return (
    <>
    <Navbar totalHabit={totalHabit}/>
    <InputBox addHabit={addHabit}/>
    <StyledUl>
      {habits.map((item) => ( 
        <Habit habit={item} key={item.id} onIncrement={handleIncrement} onDecrement={handleDecrease} onDelete={handleDelete}/>
      ))}
    </StyledUl>
    <Button changeCount={changeCount}/>
    </>
  );
};

export default Habits;