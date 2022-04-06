import React from 'react';
import styled from 'styled-components';

const StyledDiv = styled.div`
    margin: 0 auto;
    text-align: center;
    .textBox {
        box-sizing: border-box;
        margin-top: 30px;
        padding: 5px;
        width: 300px;
        height: 50px;
        border-top-left-radius: 4px;
        border-bottom-left-radius: 4px;
        border: none;
        background-color: rgba(197,239,160,0.5);
    }
    .addBtn {
        box-sizing: border-box;
        padding: 8px;
        width: 30x;
        height: 50px;
        background-color: darkgreen;
        color: white;
    }
`

const InputBox = () => {
    return (
        <StyledDiv>
            <input type="text" className='textBox' placeholder='입력해주세요'/>
            <button type='button' className='addBtn'>ADD</button>
        </StyledDiv>
    );
};

export default InputBox;