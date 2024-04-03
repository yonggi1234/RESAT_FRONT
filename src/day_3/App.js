import React, { Component } from 'react';
import Template from './Template';
import InputTodo from './InputTodo';
import TodoList from './TodoList';

class App extends Component {
  state = {
    input: '',
    filter: '전체',
    todos: [
      // { id: 0, text: '리액트', done: true, priority: '보통' },
      // { id: 1, text: 'sss', done: false, priority: '낮음' }
    ]
  }

  id = 1
  getId = () => {
    return ++this.id;
  }

  handleChange = (e) => {
    const { value } = e.target;
    this.setState({
      input: value
    });
  }

  handleInsert = (priority) => {
    const { todos, input } = this.state;
    const newTodo = {
      text: input,
      done: false,
      priority: priority,
      id: this.getId()
    };
    this.setState({
      todos: [...todos, newTodo]
    });
  }

  handleToggle = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);

    const toggled = {
      ...todos[index],
      done: !todos[index].done
    };
    this.setState({
      todos: [
        ...todos.slice(0, index),
        toggled,
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  handleRemove = (id) => {
    const { todos } = this.state;
    const index = todos.findIndex(todo => todo.id === id);
    this.setState({
      todos: [
        ...todos.slice(0, index),
        ...todos.slice(index + 1, todos.length)
      ]
    });
  }

  handleFilter = (filter) => {
    this.setState({ filter });
  }

  render() {
    const { input, todos, filter } = this.state;

    const filteredTodos = todos.filter(todo => {
      if (filter === '전체') return true;
      if (filter === '완료') return todo.done;
      if (filter === '미완') return !todo.done;
      return false;
    });

    return (
      <Template>
        <div>
          <button onClick={() => this.handleFilter('전체')}>전체</button>
          <button onClick={() => this.handleFilter('완료')}>완료</button>
          <button onClick={() => this.handleFilter('미완')}>미완</button>
        </div>
        <InputTodo onChange={this.handleChange} onInsert={this.handleInsert} value={input} />
        <TodoList todos={filteredTodos} onToggle={this.handleToggle} onRemove={this.handleRemove} />
      </Template>
    );
  }
}

export default App;
