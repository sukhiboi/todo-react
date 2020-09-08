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
  const [{ todoIds, heading }, setTodoList] = useState({
    todoIds: [],
    heading: '',
  });

  useEffect(() => {
    api.getTodoList(setTodoList);
  }, []);

  const todoItems = todoIds.map(id => (
    <TodoItemWithDelete
      deleteAction={() => api.deleteTodo(id, setTodoList)}
      id={id}
      key={id}
    />
  ));

  return (
    <div style={{ width: 'fit-content' }}>
      <HeaderWithDelete
        heading={heading}
        updateHeading={heading => api.updateHeading(heading, setTodoList)}
        deleteAction={() => api.resetList(setTodoList)}
      />
      <hr />
      {todoItems}
      <InputBar
        placeholder='Add new Todo'
        onEnter={content => api.addTodo(content, setTodoList)}
      />
    </div>
  );
};

export default TodoList;
