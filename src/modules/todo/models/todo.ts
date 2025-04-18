
export interface ITodo {
  description: string;
  done: boolean;
}

export class Todo implements ITodo {
  public readonly description: string;
  public readonly done: boolean;

  constructor(description: string, done: boolean) {
    this.description = description;
    this.done = done;
  }

  public static new(description: string): Todo {
    return new Todo(description, false);
  }

}
