import React from 'react';

function TodoList(props) {
    
    
    return (
    <>
    <li><span onClick={() => props.onSelect(props.id)}>&#10008;</span>{props.passedData}</li>
    </>
    )
};

export default TodoList;