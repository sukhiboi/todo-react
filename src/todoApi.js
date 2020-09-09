const post = function (route = '', data = {}) {
  return fetch(route, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: { 'Content-Type': 'application/json' },
  }).then(res => res.json());
};

const get = route => fetch(route).then(res => res.json());

const getTodoList = updater => {
  get('/api/todoList').then(updater);
};

const addTodo = (content, updater) => {
  post('/api/addTodo', { content }).then(updater);
};

const updateHeading = (heading, updater) => {
  post('/api/updateHeading', { heading }).then(updater);
};

const deleteTodo = (id, updater) => {
  post(`/api/deleteTodo/${id}`).then(updater);
};

const resetList = updater => {
  get('/api/resetList').then(updater);
};

const toggleTodoStatus = (id, updater) => {
  post(`/api/toggleTodo/${id}`).then(updater);
};

export default {
  getTodoList,
  addTodo,
  updateHeading,
  deleteTodo,
  resetList,
  toggleTodoStatus,
};
