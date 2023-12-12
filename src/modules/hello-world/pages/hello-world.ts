import { View } from "aurelia-framework"

export class HelloWorld {
    readonly firstName: string;
    readonly lastName: string;
    readonly content: string;

    readonly enableDebugger: boolean = false;

    constructor() {
        this.firstName = "John";
        this.lastName = "Wick";
        this.content = "Hello! Welcome to MY-PA App";
        console.log("This is from constructor");
        if (this.enableDebugger) debugger;
    }

    created(owningView: View, myView: View) {
        console.log("This is from created life cycle");
        console.log(owningView);
        console.log(myView);
        if (this.enableDebugger) debugger;
    }

    bind(bindingContext: Object, overrideContext: Object) {
        console.log("This is from bind life cycle");
        console.log(bindingContext);
        console.log(overrideContext);
        if (this.enableDebugger) debugger;
    }

    attached() {
        console.log("This is from attached life cycle");
        if (this.enableDebugger) debugger;
    }

    detached() {
        console.log("This is from detached life cycle");
        if (this.enableDebugger) debugger;
    }

    unbind() {
        console.log("This is from unbind life cycle");
        if (this.enableDebugger) debugger;
    }

    sayHello() {
        alert(`Hello ${this.firstName} ${this.lastName}`);
    }

}