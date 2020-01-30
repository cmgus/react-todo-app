import React, { Component } from 'react';

class App extends Component {

  constructor() {
    super()
    this.state = {
      message: 'Todo List',
      newTodo: '',
      todos: [
        {
          title: 'Learn React',
          done: false
        },
        {
          title: 'Learn JSX',
          done: false
        }
      ]
    }
  }
  newTodoChanged = (ev) => {
    const { value } = ev.target
    this.setState({
      newTodo: value
    })
  }
  formSubmitted = (ev) => {
    ev.preventDefault()
    this.setState({
      newTodo: '',
      todos: [
        ...this.state.todos,
        {
          title: this.state.newTodo,
          done: false
        }
      ]
    })
  }

  toggleTodoDone = (ev, index) => {
    const { checked } = ev.target
    const todos = [...this.state.todos]
    todos[index] = { ...todos[index]}
    todos[index].done = checked
    this.setState({
      todos
    }) 
  }

  render() {
    return (
      <div className="container">
        <br />
        <br />
        <h1>{this.state.message}</h1>
        <form onSubmit={this.formSubmitted}>
          <div className="row">
            <div className="six columns">
              <label htmlFor="newTodo">New todo</label>
              <input onChange={this.newTodoChanged} id="newTodo" name="newTodo" type="text" value={this.state.newTodo} />
              <input className="u-pull-right" type="submit" value="Add Todo" />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="four columns">
            <ul>
              {this.state.todos.map((todo, index) => (
                <li key={todo.title}>
                  <input onChange={(ev) => this.toggleTodoDone(ev, index)} className="u-pull-right" name={todo.title} type="checkbox" /* checked={todo.done} */ />
                  <span className={todo.done ? 'done' : ''}>{todo.title}</span>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
    );
  }
}

export default App;
