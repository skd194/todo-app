import { customElement, bindable } from "aurelia-framework"
import { Todo } from '../models/todo'

@customElement("todo-list")
export class TodoListComponent {
  @bindable public todos: Todo[]
  @bindable public onRemove: (todo: Todo) => void
  @bindable public onAdd: (todo: Todo) => void

  public newTodoDescription: string;

  public addTodo(): void {
    if (this.newTodoDescription) {
      const todo: Todo = Todo.new(this.newTodoDescription);
      this.newTodoDescription = "";
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
