import React from 'react';

const TodoItem = function (props) {
  const { todo, toggleTodo } = props;
  const { content, id, state } = todo;
  const onClick = () => toggleTodo(id);
  const className = `${state} todo-item`;

  return (
    <div onClick={onClick} className={className}>
      {content}
    </div>
  );
};

export default TodoItem;
