import { FrameworkConfiguration, PLATFORM } from 'aurelia-framework';

export function configure(config: FrameworkConfiguration): void {
  config.globalResources([
    PLATFORM.moduleName('./binding-behaviors/logger'),
    PLATFORM.moduleName('./value-converters/upper'),
  ]);
}
