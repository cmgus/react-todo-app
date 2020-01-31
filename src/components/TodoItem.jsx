import React from "react";

const TodoItem = (props) => {
    const { todo, index } = props
    return (
        <li>
            <input onChange={(ev) => props.toggleTodoDone(ev, index)} className="mr-1" checked={todo.done} name={todo.title} type="checkbox" />
            <span className={todo.done ? 'done mr-1' : 'mr-1'}>{todo.title}</span>
            <button onClick={() => props.removeTodo(index)} className="u-pull-right">Remove</button>
            <hr />
        </li>
    )
} 

export default TodoItem