import React from 'react';

const TodoItem = function (props) {
  return (
    <div className={`${props.status} todo-item`} onClick={props.toggleAction}>
      <span>{props.content}</span>
    </div>
  );
};

export default TodoItem;
