import { customElement } from 'aurelia-framework';
import { Todo, ITodo } from '../models/todo';


@customElement("todo")
export class TodoComponent {
  private readonly todos: ITodo[];

  private get existingTodoDescriptionSet(): Set<string> {
    return new Set(this.todos.map(t => t.description));
  }

  constructor() {
    this.todos = [...this.getSampleTodos];
  }

  public addTodo = (todo: Todo) => {
    this.add(this.existingTodoDescriptionSet, todo);
  }

  public removeTodo = (todo: Todo) => {
    const index = this.todos.indexOf(todo);
    if (index > -1) {
      this.todos.splice(index, 1);
    }
  }

  public populateSampleTodos() {
    this.getSampleTodos.forEach(t => {
      this.add(this.existingTodoDescriptionSet, t);
    });
  }

  public removeAllTodos(event: MouseEvent) {
    console.log(event)
    event.stopPropagation();
    this.todos.splice(0);
  }

  private add(existingDescriptionSet: Set<string>, todo: Todo) {
    if (!existingDescriptionSet.has(todo.description)) {
      this.todos.push(todo);
    }
  }

  private get getSampleTodos(): Todo[] {
    return [
      Todo.new("Read a book"),
      Todo.new("Write a book"),
      Todo.new("Go to the gym"),
      Todo.new("Go to the store"),
      Todo.new("Go to the park"),
      Todo.new("Go to the mall"),
      Todo.new("Go to the beach"),
      Todo.new("Go to the movies"),
    ];
  };
}
