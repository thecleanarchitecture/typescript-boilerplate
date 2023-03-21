/* eslint-disable no-console */
import { Infrastructure } from '@src/Infrastructure/Infrastructure';

describe('foundation - Infrastructure ComponentResponse', () => {
  it('component API', () => {
    expect.hasAssertions();
    const infra = new Infrastructure();
    console.log(infra);
    expect(infra).toHaveProperty('start');
    expect(infra).toHaveProperty('stop');
  });
});
