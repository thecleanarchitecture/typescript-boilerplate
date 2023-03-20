import { IComponentResponse } from '@src/Infrastructure/Utils';

export class ComponentResponse<T> implements IComponentResponse<T> {
  public error: Error | null;
  public data: T;

  constructor(conf?: IComponentResponse<T>) {
    const { error, data } = conf || { error: null, data: undefined };
    this.data = data;
    this.error = error;
  }
}
