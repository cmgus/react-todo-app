import React, { Component } from 'react';
import NewTodoForm from './components/NewTodoForm';
import TodoList from './containers/TodoList';

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
    todos[index] = { ...todos[index], done: checked }
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
        <NewTodoForm
          newTodo={this.state.newTodo}
          newTodoChanged={this.newTodoChanged.bind(this)}
          formSubmitted={this.formSubmitted.bind(this)} />
        <div className="row">
          <div className="five columns">
            <button onClick={() => this.allDone()} className="">All done</button>
            <br /><br />
            <TodoList 
              todos={this.state.todos}
              toggleTodoDone={this.toggleTodoDone.bind(this)}
              removeTodo={this.removeTodo.bind(this)} />
          </div>
        </div>
      </div>
    );
  }
}

export default App;
