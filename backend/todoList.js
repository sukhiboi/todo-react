const TODO = 'todo';
const INPROGRESS = 'in-progress';
const DONE = 'done';

const states = {
  [TODO]: INPROGRESS,
  [INPROGRESS]: DONE,
  [DONE]: TODO,
};

const getNextStatus = currentState => states[currentState];

const getDefaultStatus = () => TODO;

class TodoList {
  constructor(heading) {
    this.heading = heading;
    this.list = [];
    this.lastId = 0;
  }

  addTodo(content) {
    this.list.push({ content, id: this.lastId, status: getDefaultStatus() });
    return this.lastId++;
  }

  toggleTodoStatus(id) {
    const list = [...this.list];
    const todoIndex = list.findIndex(todo => todo.id === id);
    const todo = list[todoIndex];
    const status = getNextStatus(todo.status);
    list[todoIndex] = { ...todo, status };
    this.list = list;
    return status;
  }

  getHeading() {
    return this.heading;
  }

  updateHeading(heading) {
    this.heading = heading;
    return this.heading;
  }

  deleteTodo(id) {
    this.list = this.list.filter(todo => todo.id !== id);
    return id;
  }

  getTodosIds() {
    return this.list.map(todo => todo.id);
  }

  getTodo(id) {
    return { ...this.list.find(todo => todo.id === id) };
  }

  resetList() {
    this.list = [];
    this.lastId = 0;
    return this.list;
  }
}

module.exports = TodoList;
