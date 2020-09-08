import React, { useEffect, useState } from 'react';
import api from '../todoApi';

const TodoItem = function (props) {
  const [todo, setTodo] = useState(null);

  useEffect(() => {
    api.getTodo(props.id, setTodo);
  }, [props.id]);

  if (todo === null) return <p>Loading...</p>;
  return (
    <div
      className={`${todo.status} todo-item`}
      onClick={() => api.toggleTodoStatus(props.id, setTodo)}
    >
      <span>{todo.content}</span>
    </div>
  );
};

export default TodoItem;
