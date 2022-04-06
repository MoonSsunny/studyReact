import React , {useState} from 'react';
import styled from 'styled-components';


const StyledLi= styled.li`
  display: flex;
  align-items: center;
  justify-content: space-between;
`

const StyledDiv = styled.div`
  display:flex;
  align-items: center;
`

const StyledButton = styled.div`
  display: flex;
`

const Habit = ({habit,onDecrement,onIncrement,onDelete}) => {
  const {name, count} = habit;
  const handleIncrement = () => {
    onIncrement(habit);
  }
  const handleDecrement = () => {
    onDecrement(habit);
  }
  const handleDelete =() =>{
    onDelete(habit);
  }
  return ( 
    <StyledLi className='habit'>
    <StyledDiv>
      <span className='habit-name'>{name}</span>
      <span className='habit-count'>{count}</span>
    </StyledDiv>
    <StyledButton>
      <button className='habit-button habit-increase' onClick={handleIncrement}>
        <i className="fas fa-plus-square"></i>
      </button>
      <button className='habit-button habit-decrease' onClick={handleDecrement}>
        <i className="fas fa-minus-square"></i>
      </button>
      <button className='habit-button habit-delete' onClick={handleDelete}>
        <i className="fas fa-trash"></i>
      </button>
    </StyledButton>
    </StyledLi>
  );
};

export default Habit;