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
  const [todoIds, setTodoIds] = useState([]);
  const [heading, setHeading] = useState('');

  useEffect(() => {
    api.getTodoIds(setTodoIds);
    api.getHeading(setHeading);
  }, []);

  const todoItems = todoIds.map(id => (
    <TodoItemWithDelete
      deleteAction={() => api.deleteTodo(id, setTodoIds)}
      id={id}
      key={id}
    />
  ));

  return (
    <div style={{ width: 'fit-content' }}>
      <HeaderWithDelete
        heading={heading}
        updateHeading={heading => api.updateHeading(heading, setHeading)}
        deleteAction={() => api.resetList(setTodoIds)}
      />
      <hr />
      {todoItems}
      <InputBar
        placeholder='Add new Todo'
        onEnter={content => api.addTodo(content, setTodoIds)}
      />
    </div>
  );
};

export default TodoList;
