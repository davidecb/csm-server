import { BusinessError } from './business-error.error';

export class NoOwnPerformerError extends BusinessError {
  constructor(performerName: string) {
    super(
      `La modelo ${performerName}, no pertenece a CSM.`,
      NoOwnPerformerError.name,
    );
  }
}
