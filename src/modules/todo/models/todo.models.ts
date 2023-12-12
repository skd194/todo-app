
export interface ITodo {
    description: string;
    done: boolean;
}

export class Todo implements ITodo {
    readonly description: string;
    readonly done: boolean;

    constructor(description: string, done: boolean) {
        this.description = description;
        this.done = done;
    }

    static new(description: string): Todo {
        return new Todo(description, false);
    }
}