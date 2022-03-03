export class Performer {
  readonly #name: string;
  readonly #performerName: string;
  readonly #platformNames: string[];
  readonly #location: string;
  readonly #performerShift: string;
  readonly #performerId: string;
  readonly #accountId: string;
  readonly #accountType: string;
  readonly #bank: string;
  readonly #email: string;
  readonly #retention: number;
  readonly #status: boolean;

  constructor(
    name: string,
    performerName: string,
    platformNames: string[],
    location: string,
    performerShift: string,
    performerId: string,
    accountId: string,
    accountType: string,
    bank: string,
    email: string,
    retention: number,
    status: boolean,
  ) {
    this.#name = name;
    this.#performerName = performerName;
    this.#platformNames = platformNames;
    this.#location = location;
    this.#performerShift = performerShift;
    this.#performerId = performerId;
    this.#accountId = accountId;
    this.#accountType = accountType;
    this.#bank = bank;
    this.#email = email;
    this.#retention = retention;
    this.#status = status;
  }

  get name(): string {
    return this.#name;
  }

  get performerName(): string {
    return this.#performerName;
  }

  get platformNames(): string[] {
    return this.#platformNames;
  }

  get location(): string {
    return this.#location;
  }

  get performerShift(): string {
    return this.#performerShift;
  }

  get performerId(): string {
    return this.#performerId;
  }

  get accountId(): string {
    return this.#accountId;
  }

  get accountType(): string {
    return this.#accountType;
  }

  get bank(): string {
    return this.#bank;
  }

  get email(): string {
    return this.#email;
  }

  get retention(): number {
    return this.#retention;
  }

  get status(): boolean {
    return this.#status;
  }
}
