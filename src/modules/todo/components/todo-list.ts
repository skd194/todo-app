import { bindable } from "aurelia-framework";
import { Todo } from "../models/todo";

export class TodoList {
  @bindable public todos: Todo[];
  @bindable public onRemove: (todo: Todo) => void;
  @bindable public onAdd: (todo: Todo) => void;

  public newTodoDescription: string = "";
  public showDropdown: boolean = false;
  public suggestions: string[] = [
    "Buy groceries",
    "Walk the dog",
    "Read a book",
    "Write a blog post",
    "Go to the gym",
    "Plan a trip",
  ];
  public filteredSuggestions: string[] = [];

  public onInputChange(): void {
    if (this.newTodoDescription.trim() === "") {
      this.showDropdown = false;
      this.filteredSuggestions = [];
      return;
    }

    this.filteredSuggestions = this.suggestions.filter((suggestion) =>
      suggestion.toLowerCase().includes(this.newTodoDescription.toLowerCase())
    );
    this.showDropdown = this.filteredSuggestions.length > 0;
  }

  public selectSuggestion(suggestion: string): void {
    this.newTodoDescription = suggestion;
    this.showDropdown = false;
  }

  public addTodo(): void {
    if (this.newTodoDescription) {
      const todo: Todo = Todo.new(this.newTodoDescription);
      this.newTodoDescription = "";
      this.showDropdown = false;
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
