const express = require('express');

const { getDefaultStatus, getNextStatus } = require('./todoItemStates');
const todoList = { heading: 'Todo', todos: [], lastId: 0 };

const api = express.Router();

api.get('/todoList', (req, res) => res.json(todoList));

api.get('/resetList', (req, res) => {
  todoList.todos = [];
  todoList.lastId = 0;
  res.json(todoList);
});

api.post('/addTodo', (req, res) => {
  const content = req.body.content;
  const newTodo = {
    content,
    id: todoList.lastId++,
    status: getDefaultStatus(),
  };
  todoList.todos.push(newTodo);
  res.json({ id: todoList.id });
});

api.post('/deleteTodo/:id', (req, res) => {
  todoList.todos = todoList.todos.filter(
    todoList => todoList.id !== +req.params.id
  );
  res.json({ id: req.params.id });
});

api.post('/updateHeading', (req, res) => {
  todoList.heading = req.body.heading;
  res.json({ heading: req.body.heading });
});

api.post('/toggleTodo/:id', (req, res) => {
  const todoToUpdate = todoList.todos.find(
    todoList => todoList.id === +req.params.id
  );
  const updatedStatus = getNextStatus(todoToUpdate.status);
  todoToUpdate.status = updatedStatus;
  res.json({ status: updatedStatus });
});

module.exports = api;
