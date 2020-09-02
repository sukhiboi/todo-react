import React from 'react';

const TodoItem = function (props) {
  const { todo, toggleTodo, deleteTodo } = props;
  const { content, id, status } = todo;

  return (
    <div className={`${status} todo-item`}>
      <span onClick={() => toggleTodo(id)}>{content}</span>
      <span className='cross' onClick={() => deleteTodo(id)}>
        X
      </span>
    </div>
  );
};

export default TodoItem;
