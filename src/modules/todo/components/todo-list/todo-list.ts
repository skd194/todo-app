import { bindable } from "aurelia-framework";
import { Todo } from "../../models/todo";

export class TodoList {

  @bindable public todos: Todo[];
  @bindable public onRemove: (todo: Todo) => void;
  @bindable public onAdd: (todo: Todo) => void;

  public newTodo: Todo = new Todo("", false);

  public addTodo(): void {
    if (this.newTodo.description) {
      const todo: Todo = Todo.new(this.newTodo.description);
      this.newTodo.description = "";
      if (this.onAdd) {
        this.onAdd(todo);
      }
    }
  }

  public removeTodo(todo: Todo): void {
    if (this.onRemove) {
      this.onRemove(todo);
    }
  }
}
