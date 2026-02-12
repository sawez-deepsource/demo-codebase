// angular-service.ts — Angular rule violations
// @angular-eslint plugin targets *.ts files

// JS-0604: @angular-eslint/no-empty-lifecycle-method — empty ngOnInit
class MyComponent {
  ngOnInit() {}
  ngOnDestroy() {}

  onClick() {
    console.log("clicked");
  }
}

// JS-0595: @angular-eslint/use-pipe-transform-interface — pipe class without PipeTransform
class FormatPipe {
  transform(value: string): string {
    return value.toUpperCase();
  }
}

// JS-0574: @angular-eslint/no-output-native — output property named like a native event
class ButtonComponent {
  click = new EventEmitter();
  focus = new EventEmitter();
}

class EventEmitter {
  emit(_value?: unknown) {}
}

export { MyComponent, FormatPipe, ButtonComponent };
