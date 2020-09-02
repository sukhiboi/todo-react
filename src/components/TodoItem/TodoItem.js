import React from 'react';
import CrossBtn from '../CrossBtn';

const TodoItem = function (props) {
  const { todo, toggleTodo, deleteTodo } = props;
  const { content, id, status } = todo;

  return (
    <div className={`${status} todo-item`}>
      <span onClick={() => toggleTodo(id)}>{content}</span>
      <CrossBtn className="cross" onClick={() => deleteTodo(id)} />
    </div>
  );
};

export default TodoItem;
