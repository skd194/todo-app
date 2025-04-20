import { EventAggregator } from 'aurelia-event-aggregator';
import { autoinject, bindable } from "aurelia-framework";
import { TodoAdded } from '../../events/todo-added';
import { Todo } from '../../models/todo';

@autoinject
export class NotificationIcon {

  public notifications: string[] = [];
  private subscription: any// Array to hold notifications

  constructor(private eventAggregator: EventAggregator) {
  }

  public attached() {
    this.subscription = this.eventAggregator.subscribe(TodoAdded, (todo: Todo) => {
      this.notifications.push(todo.description);
    });
  }

  public showNotifications(): void {
    console.log("Notifications:", this.notifications);
    // Add logic to display notifications (e.g., dropdown or modal)
  }

  detached() {
    this.subscription.dispose(); // Clean up subscription when the component is detached
  }
}
