import { autoinject, bindable, BindingEngine, bindingMode, observable } from 'aurelia-framework';
import { Todo } from '../../models/todo';
import { TodoKind } from '../../enums/todo-kind';

@autoinject
export class TodoAddForm {
  @bindable public data: Todo;

  private kindWatcher: any;

  public todoKind = TodoKind;

  @observable public testNumber: number = 0;

  public countries = [
    { name: 'United States', code: 'US' },
    { name: 'Canada', code: 'CA' }
  ];

  constructor(private bindingEngine: BindingEngine) {
  }

  public testNumberChanged(newValue: number, oldValue: number) {
    console.log('testNumber changed from', oldValue, 'to', newValue);
  }

  public attached() {
    this.kindWatcher = this.bindingEngine
      .propertyObserver(this.data, 'kind')
      .subscribe((newValue, oldValue) => {
        this.data.description = this.data.description.trim() + ' | kind > ' + newValue;
      });
  }

  public detached() {
    this.kindWatcher.dispose(); // Clean up subscription when the component is detached
  }

  public addTodo(): void {
    console.log('Adding Todo:', this.data);
    console.log('Number:', this.testNumber);
  }
}
