import React from 'react';
import styled from 'styled-components';

const StyledButton = styled.button`
  width:100px;
  height:30px;
  background-color:darkgreen;
  display:inline-block;
`

const Button = () => {
  return (
    <StyledButton>Reset All</StyledButton>
  );
};

export default Button;