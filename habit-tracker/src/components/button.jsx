import React, { memo } from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
  width: 100%;
`
const StyledButton = styled.button`
  width:300px;
  height:50px;
  background-color:darkgreen;
  display:block;
  text-align: center;
  color: white ;
  border-radius: 4px;
  font-size: 20px;
  margin: 0 auto;
`

const Button = memo(({changeCount}) => {
  return (
    <StyledDiv>
    <StyledButton onClick={changeCount}>Reset All</StyledButton>
    </StyledDiv>
  );
});

export default Button;