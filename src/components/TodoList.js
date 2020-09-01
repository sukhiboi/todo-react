import React from 'react';
import { getNextTodoState, getDefaultState } from './TodoItem/todoItemStates';
import './todoList.css';
import InputBar from './InputBar';
import TodoItem from './TodoItem/TodoItem';
import Header from './Header';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], title: 'Todo' };
    this.addNewTodo = this.addNewTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  updateTitle(newTitle) {
    this.setState(() => ({ title: newTitle }));
  }

  addNewTodo(content) {
    this.setState(state => {
      const id = state.todos.length + 1;
      const todo = { content, id, state: getDefaultState() };
      return { todos: [...state.todos, todo] };
    });
  }

  toggleTodo(id) {
    this.setState(state => {
      const index = state.todos.findIndex(todo => todo.id === id);
      const todo = state.todos[index];
      const updatedTodo = { ...todo, state: getNextTodoState(todo.state) };
      const todos = [...state.todos];
      todos[index] = updatedTodo;
      return { todos };
    });
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <TodoItem todo={todo} toggleTodo={this.toggleTodo} key={todo.id} />
    ));

    return (
      <div>
        <Header title={this.state.title} updateTitle={this.updateTitle} />
        {todos}
        <InputBar onEnter={this.addNewTodo} />
      </div>
    );
  }
}

export default TodoList;
