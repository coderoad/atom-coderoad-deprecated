declare namespace Validation {
  interface Object {
    errors: Errors[];
    warnings: Errors[];
  }

  interface Errors {
    name: string;
    msg: string;
    example?: string;
  }
}
