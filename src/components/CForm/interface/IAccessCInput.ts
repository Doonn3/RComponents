interface IAccessCInput {
  accessTextError(errorText?: string): void;
  accessTextSuccess(successText?: string): void;
  resetAccessText(): void;
}

export default IAccessCInput;
