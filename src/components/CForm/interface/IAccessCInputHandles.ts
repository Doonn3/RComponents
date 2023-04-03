interface IAccessCInputHandles<T> {
  GetchildRef: React.RefObject<T>;
  accessTextError(errorText?: string): void;
  accessTextSuccess(successText?: string): void;
  resetAccessText(): void;
}

export default IAccessCInputHandles;
