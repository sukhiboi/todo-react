import React from 'react';
import { getNextTodoState, getDefaultState } from './TodoItem/todoItemStates';
import './todoList.css';
import InputBar from './InputBar';
import TodoItem from './TodoItem/TodoItem';
import Header from './Header';

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.state = { todos: [], title: 'Todo', lastId: 0 };
    this.addNewTodo = this.addNewTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
    this.deleteTodo = this.deleteTodo.bind(this);
  }

  updateTitle(newTitle) {
    this.setState(() => ({ title: newTitle }));
  }

  addNewTodo(content) {
    this.setState(state => {
      const todo = { content, id: state.lastId, status: getDefaultState() };
      return { todos: [...state.todos, todo], lastId: state.lastId++ };
    });
  }

  deleteTodo(id) {
    this.setState(state => {
      const todos = state.todos.filter(todo => todo.id !== id);
      return { todos };
    });
  }

  toggleTodo(id) {
    this.setState(state => {
      const index = state.todos.findIndex(todo => todo.id === id);
      const todo = state.todos[index];
      const updatedTodo = { ...todo, status: getNextTodoState(todo.status) };
      const todos = [...state.todos];
      todos[index] = updatedTodo;
      return { todos };
    });
  }

  render() {
    const todos = this.state.todos.map(todo => (
      <TodoItem
        todo={todo}
        toggleTodo={this.toggleTodo}
        deleteTodo={this.deleteTodo}
        key={todo.id}
      />
    ));

    return (
      <div style={{ width: 'fit-content' }}>
        <Header title={this.state.title} updateTitle={this.updateTitle} />
        <hr />
        {todos}
        <InputBar placeholder='Add new Todo' onEnter={this.addNewTodo} />
      </div>
    );
  }
}

export default TodoList;
