export class Streamate {
  readonly #performerName: string;
  readonly #endTime: Date;
  readonly #totalTime: number;
  readonly #performerEarned: number;
  readonly #transactionId: string;

  constructor(
    performerName: string,
    endTime: Date,
    totalTime: number,
    performerEarned: number,
    transactionId: string,
  ) {
    this.#performerName = performerName;
    this.#endTime = endTime;
    this.#totalTime = totalTime;
    this.#performerEarned = performerEarned;
    this.#transactionId = transactionId;
  }

  get performerName(): string {
    return this.#performerName;
  }

  get endTime(): Date {
    return this.#endTime;
  }

  get totalTime(): number {
    return this.#totalTime;
  }

  get performerEarned(): number {
    return this.#performerEarned;
  }

  get transactionId(): string {
    return this.#transactionId;
  }
}
