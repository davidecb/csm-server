export enum BusinessErrors {
  /* BUSINESS ERRORS STATUSCODES */
  DEFAULT = 'BAD_REQUEST',
  INVALID_LENGTH = 'BAD_REQUEST',
  USERNAME_WRONG = 'UNAUTHORIZED',
  PASSWORD_WRONG = 'UNAUTHORIZED',
  USERNAME_EXISTS = 'BAD_REQUEST',
  UNAUTHORIZED_USER = 'UNAUTHORIZED',
  UNEXISTENT_USER = 'NOT_FOUND',
}
