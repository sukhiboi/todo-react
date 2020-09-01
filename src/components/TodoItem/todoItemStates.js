const TODO = 'todo';
const INPROGRESS = 'in-progress';
const DONE = 'done';

const states = {
  [TODO]: INPROGRESS,
  [INPROGRESS]: DONE,
  [DONE]: TODO,
};

const getNextTodoState = currentState => states[currentState];

const getDefaultState = () => TODO;

export { getNextTodoState, getDefaultState };
