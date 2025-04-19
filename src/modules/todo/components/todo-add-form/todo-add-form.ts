import { bindable } from 'aurelia-framework';
import { Todo } from '../../models/todo';
import { TodoKind } from '../../enums/todo-kind';
export class TodoAddForm {
  @bindable public data: Todo;

  public todoKind = TodoKind;

  public countries = [
    { name: 'United States', code: 'US' },
    { name: 'Canada', code: 'CA' }
  ];
}
