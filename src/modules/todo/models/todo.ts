import { TodoKind } from '../enums/todo-kind';

export interface ITodo {
  description: string;
  done: boolean;
}

export class Todo implements ITodo {
  public description: string;
  public readonly done: boolean;
  public kind: TodoKind;
  public country: string;

  constructor(description: string, done: boolean) {
    this.description = description;
    this.done = done;
    this.kind = TodoKind.None;
  }

  public static new(description: string): Todo {
    return new Todo(description, false);
  }

}
