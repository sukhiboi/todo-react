const express = require('express');
const app = express();

const { getDefaultStatus, getNextStatus } = require('./todoItemStates');
const todoList = { heading: 'Todo', todos: [], lastId: 0 };

app.use(express.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/api/todoList', (req, res) => res.json(todoList));

app.get('/api/resetList', (req, res) => {
  todoList.todos = [];
  todoList.lastId = 0;
  res.json(todoList);
});

app.post('/api/addTodo', (req, res) => {
  const content = req.body.content;
  const id = todoList.lastId++;
  todoList.todos.push({ content, id, status: getDefaultStatus() });
  res.json(todoList);
});

app.post('/api/deleteTodo/:id', (req, res) => {
  todoList.todos = todoList.todos.filter(todo => todo.id !== +req.params.id);
  res.json(todoList);
});

app.post('/api/updateHeading', (req, res) => {
  todoList.heading = req.body.heading;
  res.json(todoList);
});

app.post('/api/toggleTodo/:id', (req, res) => {
  const todoToUpdate = todoList.todos.find(todo => todo.id === +req.params.id);
  todoToUpdate.status = getNextStatus(todoToUpdate.status);
  res.json(todoList);
});

app.listen(3001, () => console.log('listening on 3001'));
