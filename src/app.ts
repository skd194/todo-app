interface ITodo {
    description: string;
    done: boolean;
}

class Todo implements ITodo {
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

export class App {
    readonly title = "My Todo App"
    readonly todos: ITodo[];

    todoDescription: string;

    constructor() {
        this.todos = [];
    }

    addTodo() {
        if (this.todoDescription) {
            this.todos.push(Todo.new(this.todoDescription));
            this.todoDescription = "";
        }
    }

    removeTodo(todo: ITodo) {
        const index = this.todos.indexOf(todo);
        this.todos.splice(index, 1);
    }

    populateSampleTodos() {
        const sampleTodos = [
            Todo.new("read dotnet 8 blog"),
            Todo.new("learn Aurelia JS"),
            Todo.new("clean my room"),
            Todo.new("call my buddy"),
        ]
        sampleTodos.forEach(t => this.todos.push(t))
    }

    removeAllTodos() {
        this.todos.splice(0);
    }
}