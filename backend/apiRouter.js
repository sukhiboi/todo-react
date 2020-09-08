const express = require('express');
const TodoList = require('./todoList');

const todo = new TodoList('todo');

const apiRouter = express.Router();

apiRouter.get('/todoIds', (req, res) => res.json(todo.getTodosIds()));
apiRouter.get('/todo/:id', (req, res) => res.json(todo.getTodo(req.params.id)));
apiRouter.get('/api/heading', (req, res) => res.json(todo.getHeading()));

apiRouter.post('/addTodo', (req, res) => {
  todo.addTodo(req.body.content);
  res.end();
});

apiRouter.post('/deleteTodo/:id', (req, res) => {
  todo.deleteTodo(req.params.id);
  res.end();
});

apiRouter.post('/updateHeading', (req, res) => {
  todo.updateHeading(req.body.heading);
  res.end();
});

apiRouter.post('/toggleTodo/:id', (req, res) => {
  todo.toggleTodoStatus(req.params.id);
  res.end();
});

module.exports = apiRouter;
