const sendPostRequest = function (route, data = {}) {
  return fetch(route, {
    method: 'POST',
    body: JSON.stringify(data),
    headers: {
      'Content-Type': 'application/json',
    },
  }).then(res => res.json());
};

const getRequest = route => fetch(route).then(res => res.json());

//TodoListAPI

const getTodoIds = updater => {
  getRequest('/api/todoIds').then(ids => updater(ids));
};

const getHeading = updater => {
  getRequest('/api/heading').then(({ heading }) => updater(heading));
};

const addTodo = (content, updater) => {
  sendPostRequest('/api/addTodo', { content }).then(({ id }) => {
    updater(ids => [...ids, id]);
  });
};

const updateHeading = (heading, updater) => {
  sendPostRequest('/api/updateHeading', { heading }).then(({ heading }) =>
    updater(heading)
  );
};

const deleteTodo = (id, updater) => {
  sendPostRequest(`/api/deleteTodo/${id}`).then(() => getTodoIds(updater));
};

const resetList = updater => {
  fetch('/api/resetList').then(() => updater([]));
};

//TodoItemAPI

const getTodo = (id, updater) => {
  getRequest(`/api/todo/${id}`).then(updater);
};

const toggleTodoStatus = (id, updater) => {
  sendPostRequest(`/api/toggleTodo/${id}`).then(({ status }) => {
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
