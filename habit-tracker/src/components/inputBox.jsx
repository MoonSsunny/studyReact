import React,{memo, useRef, useState} from 'react';
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

const InputBox =memo( ({addHabit}) => {
    const [value , setValue] = useState('')
    const inputRef = useRef();
    const handleChange = (e)=>{
        setValue(e.target.value);
    }
    const onKeyup = (e) =>{
        if(e.key ==='Enter') addTracker();
    }
    const addTracker =(e) =>{
        if(!inputRef.current.value) return;
        addHabit(value);
        inputRef.current.value = ''
        inputRef.current.focus();
    }
    return (
        <StyledDiv>
            <input type="text" className='textBox' placeholder='입력해주세요' onChange={handleChange} ref={inputRef} onKeyUp={onKeyup}/>
            <button type='button' className='addBtn' onClick={addTracker}>ADD</button>
        </StyledDiv>
    );
})

export default InputBox;