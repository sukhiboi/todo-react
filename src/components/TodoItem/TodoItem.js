import React from 'react';

const TodoItem = function (props) {
  const { todo, toggleTodo } = props;
  const { content, id, state } = todo;
  return (
    <div onClick={() => toggleTodo(id)} className={`${state} todo-item`}>
      <div></div>
      <span>{content}</span>
    </div>
  );
};

export default TodoItem;
