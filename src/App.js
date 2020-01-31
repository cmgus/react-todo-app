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
    todos[index] = { ...todos[index] }
    todos[index].done = checked
    this.setState({
      todos
    })
  }

  removeTodo(index) {
    const todos = [...this.state.todos]
    todos.splice(index, 1)
    this.setState({
      todos
    })
  }

  allDone() {
    const todos = this.state.todos.map(todo => {
      return {
        ...todo,
        done: true
      }
    })
    this.setState({ todos })
  }

  render() {
    return (
      <div className="container">
        <br /><br />
        <h1>{this.state.message}</h1>
        <form onSubmit={this.formSubmitted}>
          <div className="row">
            <div className="six columns">
              <label htmlFor="newTodo">New todo</label>
              <input onChange={this.newTodoChanged} id="newTodo" name="newTodo" type="text" value={this.state.newTodo} />
              <input className="u-pull-right button-primary" type="submit" value="Add Todo" />
            </div>
          </div>
        </form>
        <div className="row">
          <div className="five columns">
            <button onClick={() => this.allDone()} className="">All done</button>
            <br /><br />
            <ul>
              {this.state.todos.map((todo, index) => (
                <li key={todo.title}>
                  <input onChange={(ev) => this.toggleTodoDone(ev, index)} className="mr-1" checked={todo.done} name={todo.title} type="checkbox" />
                  <span className={todo.done ? 'done mr-1' : 'mr-1'}>{todo.title}</span>
                  <button onClick={() => this.removeTodo(index)} className="u-pull-right">Remove</button>
                  <hr />
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
