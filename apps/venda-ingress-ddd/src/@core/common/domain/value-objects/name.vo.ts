import { ValueObject } from './value-object';

export class Name extends ValueObject<string> {
  constructor(value: string) {
    super(value);
    this.isValid();
  }

  isValid(): boolean {
    return this.value.length >= 3;
  }
}
