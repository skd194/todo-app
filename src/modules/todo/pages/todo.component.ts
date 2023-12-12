import { customElement } from 'aurelia-framework';
import { Todo, ITodo } from '../models/todo.models';


@customElement("todo")
export class TodoComponent {
    readonly title = "My Todo App"
    readonly todos: ITodo[];

    todoDescription: string;

    constructor() {
        this.todos = [...this.getSampleTodos];
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
        this.getSampleTodos.forEach(t => this.todos.push(t))
    }

    removeAllTodos(event: MouseEvent) {
        console.log(event)
        event.stopPropagation();
        this.todos.splice(0);
    }

    eventDelegationSample() {
        console.log("event delegation ....")
    }

    private get getSampleTodos(): Todo[] {
        return [
            Todo.new("read dotnet 8 blog"),
            Todo.new("learn Aurelia JS"),
            Todo.new("clean my room"),
            Todo.new("call my buddy"),
        ];
    };
}