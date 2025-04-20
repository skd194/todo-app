export class LoggerBindingBehavior {
  bind(binding: {
    updateSource: (value: any) => void;
    updateTarget: (value: any) => void;
  }, source: any) {
    const originalUpdateTarget = binding.updateTarget;
    const originalUpdateSource = binding.updateSource;

    binding.updateTarget = function (value: any) {
      console.log('Logger BB (to view):', value);
      originalUpdateTarget.call(binding, value);
    };

    binding.updateSource = function (value) {
      console.log('Logger BB (from view):', value);
      originalUpdateSource.call(binding, value);
    };
  }

  unbind(binding) {
    // Optional: Cleanup if needed
  }
}
