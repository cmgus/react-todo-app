import React from "react";
import TodoItem from "../components/TodoItem";

const TodoList = (props) => {
    return (
        <ul>
            {props.todos.map((todo, index) => (
                <TodoItem 
                    index={index}
                    key={index}
                    todo={todo}
                    toggleTodoDone={props.toggleTodoDone}
                    removeTodo={props.removeTodo}
                />
            ))}
        </ul>
    )
}

export default TodoList