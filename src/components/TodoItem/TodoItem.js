import React from 'react';

const TodoItem = function (props) {
  const { todo, toggleTodo } = props;
  const { content, id, status } = todo;

  return (
    <div className={`${status} todo-item`}>
      <span onClick={() => toggleTodo(id)}>{content}</span>
    </div>
  );
};

export default TodoItem;
