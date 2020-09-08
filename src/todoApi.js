const post = function (route = '', data = {}) {
  return fetch(route, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then(res => res.json());
};

const get = route => fetch(route).then(res => res.json());

//TodoListAPI

const getTodoList = updater => {
  get('/api/todoList').then(updater);
};

const addTodo = (content, updater) => {
  post('/api/addTodo', { content }).then(({ id }) => {
    updater(todoList => ({ ...todoList, todoIds: [...todoList.todoIds, id] }));
  });
};

const updateHeading = (heading, updater) => {
  post('/api/updateHeading', { heading }).then(({ heading }) =>
    updater(todoList => ({ ...todoList, heading }))
  );
};

const deleteTodo = (id, updater) => {
  post(`/api/deleteTodo/${id}`).then(() => getTodoList(updater));
};

const resetList = updater => {
  get('/api/resetList').then(updater);
};

//TodoItemAPI

const getTodo = (id, updater) => {
  get(`/api/todo/${id}`).then(updater);
};

const toggleTodoStatus = (id, updater) => {
  post(`/api/toggleTodo/${id}`).then(({ status }) => {
    updater(todo => ({ ...todo, status }));
  });
};

export default {
  getTodoList,
  addTodo,
  updateHeading,
  deleteTodo,
  resetList,
  getTodo,
  toggleTodoStatus,
};
