export class BusinessError extends Error {
  constructor(message: string, errorClass?: string) {
    super(message);
    this.name = errorClass || BusinessError.name;
  }
}
