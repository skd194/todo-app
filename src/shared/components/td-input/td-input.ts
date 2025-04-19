import { bindable } from 'aurelia-framework';

export class TdInput {
  @bindable public label: string = "";
  @bindable public type: string = "text";
  @bindable public value: string = "";
  @bindable public placeholder: string = "";
  @bindable public disabled: boolean = false;
  @bindable public helpText: string = "";
  @bindable public errorText: string = "";
  @bindable public minLength: string = "0";
  @bindable public maxLength: string = "100000000";
}
