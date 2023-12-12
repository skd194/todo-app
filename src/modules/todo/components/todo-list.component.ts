import { customElement, bindable } from "aurelia-framework"
import { Todo } from '../models/todo.models'

@customElement("todo-list")
export class TodoListComponent {
    @bindable todos: Todo[]

    removeTodo(todo: Todo) {
        
    }
}