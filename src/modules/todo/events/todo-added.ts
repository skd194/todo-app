import { Todo } from '../models/todo';

export class TodoAdded {
  constructor(public todo: Todo) {
    this.todo = todo;
  }
}
