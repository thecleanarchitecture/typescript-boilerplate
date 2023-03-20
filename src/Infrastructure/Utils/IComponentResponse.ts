export interface IComponentResponse<T> {
  error: Error | null;
  data: T;
}
