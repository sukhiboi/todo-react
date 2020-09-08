const post = function (route = '', data = {}) {
  return fetch(route, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
};

const get = route => fetch(route).then(res => res.json());

//TodoListAPI

const getTodoIds = updater => {
  get('/api/todoIds').then(ids => updater(ids));
};

const getHeading = updater => {
  get('/api/heading').then(({ heading }) => updater(heading));
};

const addTodo = (content, updater) => {
  post('/api/addTodo', { content }).then(({ id }) => {
    updater(ids => [...ids, id]);
  });
};

const updateHeading = (heading, updater) => {
  post('/api/updateHeading', { heading }).then(({ heading }) =>
    updater(heading)
  );
};

const deleteTodo = (id, updater) => {
  post(`/api/deleteTodo/${id}`).then(() => getTodoIds(updater));
};

const resetList = updater => {
  get('/api/resetList').then(res => updater(res));
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
  getTodoIds,
  getHeading,
  addTodo,
  updateHeading,
  deleteTodo,
  resetList,
  getTodo,
  toggleTodoStatus,
};
