import React from "react";

const NewTodoForm = (props) => {
    return (
        <form onSubmit={props.formSubmitted}>
            <div className="row">
                <div className="six columns">
                    <label htmlFor="newTodo">New todo</label>
                    <input onChange={props.newTodoChanged} id="newTodo" name="newTodo" type="text" value={props.newTodo} />
                    <input className="u-pull-right button-primary" type="submit" value="Add Todo" />
                </div>
            </div>
        </form>
    )
}

export default NewTodoForm