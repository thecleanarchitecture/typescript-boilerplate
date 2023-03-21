/* eslint-disable no-console */
import environment from '@src/Infrastructure/config/environment';

console.log(environment);

export class Infrastructure {
  private config: Record<string, unknown> = {};

  constructor() {
    this.config.environment = environment;
    console.log(this.config);
  }
}
