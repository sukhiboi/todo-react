import React, { useState, useEffect } from 'react';
import api from '../todoApi';
import './todoList.css';
import InputBar from './InputBar';
import TodoItem from './TodoItem';
import Header from './Header';
import WithDelete from './WithDelete';

const TodoItemWithDelete = WithDelete(TodoItem);
const HeaderWithDelete = WithDelete(Header);

const TodoList = props => {
  const [{ todos, heading }, setTodoList] = useState({
    todos: [],
    heading: '',
  });

  useEffect(() => {
    api.getTodoList(setTodoList);
  }, []);

  const todoItems = todos.map(todo => (
    <TodoItemWithDelete
      deleteAction={() => api.deleteTodo(todo.id, setTodoList)}
      toggleAction={() => api.toggleTodoStatus(todo.id, setTodoList)}
      {...todo}
      key={todo.id}
    />
  ));

  return (
    <div className='todo-list'>
      <HeaderWithDelete
        heading={heading}
        updateHeading={heading => api.updateHeading(heading, setTodoList)}
        deleteAction={() => api.resetList(setTodoList)}
      />
      <hr />
      {todoItems}
      <hr />
      <InputBar
        placeholder='Add new Todo'
        onEnter={content => api.addTodo(content, setTodoList)}
      />
    </div>
  );
};

export default TodoList;
