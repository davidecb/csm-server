export class Note {
  readonly #type: string;
  readonly #performer: string;
  readonly #createdBy: string;
  readonly #date: Date;
  readonly #noteId: string;

  constructor(
    type: string,
    performer: string,
    createdBy: string,
    date: Date,
    noteId: string,
  ) {
    this.#type = type;
    this.#performer = performer;
    this.#createdBy = createdBy;
    this.#date = date;
    this.#noteId = noteId;
  }

  get type(): string {
    return this.#type;
  }

  get performer(): string {
    return this.#performer;
  }

  get createdBy(): string {
    return this.#createdBy;
  }

  get date(): Date {
    return this.#date;
  }

  get noteId(): string {
    return this.#noteId;
  }
}
