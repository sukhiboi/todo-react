import React from 'react';
import './todoItem.css';

const TodoItem = function (props) {
  const { todo, onClick } = props;
  const { content, id, state } = todo;
  const states = ['created', 'in-progress', 'done'];
  return (
    <div onClick={() => onClick(id)} className={`${states[state]} todo-item`}>
      <div></div>
      <span>{content}</span>
    </div>
  );
};

export default TodoItem;
