import React, { useState } from 'react'

const TodoForm = (props) => {
    const [inputValue, setInputValue] = useState("")
    const onHandleSubmit = (e) => {
        e.preventDefault();
        props.onAdd(inputValue)
    }
    const onHandleChange = (e) => {
        // console.log(e.target.value);
        setInputValue(e.target.value)
    }
    return (
        <div>
            <form action="" onSubmit={onHandleSubmit}>
                <input type="text" onChange={onHandleChange} />
                <button type="submit">Add</button>
            </form>
        </div>
    )
}

export default TodoForm
