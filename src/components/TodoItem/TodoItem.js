import React from 'react';
import './todoItem.css';

const TodoItem = function (props) {
  const { todo, onClick } = props;
  const { content, id, state } = todo;
  return (
    <div onClick={() => onClick(id)} className={`${state} todo-item`}>
      <div></div>
      <span>{content}</span>
    </div>
  );
};

export default TodoItem;
