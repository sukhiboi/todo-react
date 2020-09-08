const TodoList = require('./../todoList');
const assert = require('assert');

describe('TodoList()', () => {
  it('should add a todo to the list', () => {
    const todoList = new TodoList('todo');
    const id = todoList.addTodo('new todo');
    assert.deepStrictEqual(todoList.getTodosIds(), [id]);
  });

  it('should get the todo with the id', () => {
    const todoList = new TodoList('todo');
    const id = todoList.addTodo('new todo');
    assert.deepStrictEqual(todoList.getTodo(id), {
      content: 'new todo',
      id: 0,
      status: 'todo',
    });
  });

  it('should delete a todo from the list', () => {
    const todoList = new TodoList('todo');
    const id1 = todoList.addTodo('another todo');
    const id2 = todoList.addTodo('new todo');
    todoList.deleteTodo(id1);
    assert.deepStrictEqual(todoList.getTodosIds(), [id2]);
  });

  it('should toggle todo status', () => {
    const todoList = new TodoList('todo');
    const content = 'new Todo';
    const id = todoList.addTodo(content);
    todoList.toggleTodoStatus(id);
    assert(todoList.getTodo(id), { content, id, status: 'in-progress' });
    todoList.toggleTodoStatus(id);
    assert(todoList.getTodo(id), { content, id, status: 'done' });
  });

  it('should update heading', () => {
    const todoList = new TodoList('todo');
    const newHeading = todoList.updateHeading('todo for home');
    assert.strictEqual(todoList.getHeading(), newHeading);
  });
});
