const express = require('express');
const app = express();
const bodyParser = require('body-parser');

const TodoList = require('./todoList');
const todo = new TodoList('todo');

app.use(bodyParser.json());

app.use((req, res, next) => {
  console.log(req.method, req.url);
  next();
});

app.get('/api/todoIds', (req, res) => res.json(todo.getTodosIds()));
app.get('/api/todo/:id', (req, res) => {
  const id = Number(req.params.id);
  return res.json(todo.getTodo(id));
});
app.get('/api/heading', (req, res) => res.json({ heading: todo.getHeading() }));
app.get('/api/resetList', (req, res) => {
  todo.resetList();
  return res.end();
});

app.post('/api/addTodo', (req, res) => {
  const id = todo.addTodo(req.body.content);
  res.json({ id });
});

app.post('/api/deleteTodo/:id', (req, res) => {
  const id = Number(req.params.id);
  const deletedTodoId = todo.deleteTodo(id);
  res.json({ id: deletedTodoId });
});

app.post('/api/updateHeading', (req, res) => {
  const heading = todo.updateHeading(req.body.heading);
  res.json({ heading });
});

app.post('/api/toggleTodo/:id', (req, res) => {
  const id = Number(req.params.id);
  const status = todo.toggleTodoStatus(id);
  res.json({ status });
});

app.listen(3001, () => console.log('listening on 3001'));
