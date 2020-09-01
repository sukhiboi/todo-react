import React from 'react';
import { getNextTodoState, getDefaultState } from './TodoItem/todoItemStates';
import './todoList.css';
import InputBar from './InputBar';
import TodoItem from './TodoItem/TodoItem';
import Header from './Header';

const idGenerator = function () {
  let id = 0;
  return () => id++;
};

class TodoList extends React.Component {
  constructor(props) {
    super(props);
    this.nextTodoId = idGenerator();
    this.state = { todos: [], title: 'Todo' };
    this.addNewTodo = this.addNewTodo.bind(this);
    this.toggleTodo = this.toggleTodo.bind(this);
    this.updateTitle = this.updateTitle.bind(this);
  }

  updateTitle(newTitle) {
    this.setState(() => ({ title: newTitle }));
  }

  addNewTodo(content) {
    const id = this.nextTodoId();
    const todo = { content, id, status: getDefaultState() };
    this.setState(state => ({ todos: [...state.todos, todo] }));
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
      <TodoItem todo={todo} toggleTodo={this.toggleTodo} key={todo.id} />
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
