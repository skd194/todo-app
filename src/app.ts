import { Router, RouterConfiguration } from "aurelia-router"
import { PLATFORM } from "aurelia-pal";


export class App {
    router: Router;

    configureRouter(config: RouterConfiguration, router: Router): void {
        this.router = router;
        config.title = 'Contacts';
        config.options.pushState = true;
        config.options.root = "/";
        config.map([
            { route: '', moduleId: PLATFORM.moduleName("modules/no-selection/pages/no-selection"), title: 'Select' },
            { route: 'contacts/:id', moduleId: PLATFORM.moduleName('modules/contact/pages/contact-detail'), name: 'contacts' }
        ]);
        this.router = router;
    }
}