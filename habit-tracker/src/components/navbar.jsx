import React from 'react';
import styled from 'styled-components';
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLeaf } from "@fortawesome/free-solid-svg-icons";

const StyledDiv = styled.div`
    width: 100%;
    height: 70px;
    padding-top: 30px;
    padding-bottom: 30px;
    background-color: yellowgreen;
    color: whitesmoke;
    display: flex;
    justify-content: center;
    align-items: center;
     .icon {
         margin-right: 20px;
         color:darkgreen;
         font-size: 35px;
     }
    span {
        margin-left: 15px;
        width: 2.5rem;
        height: 2.5rem;
        border-radius: 50%;
        background-color: darkgreen;
        text-align: center;
        font-size: 2rem;
    }
`

const Navbar = ({totalHabit}) => {
    return (
    <StyledDiv>
    <FontAwesomeIcon icon={faLeaf} className="icon" />
    <h1>Habit Tracker</h1>
    <span>{totalHabit}</span>
    </StyledDiv>
);
};

export default Navbar;