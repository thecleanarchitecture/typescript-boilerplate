import { ComponentResponse, IComponentResponse } from '@src/Infrastructure/Utils';

interface IMockedDataEntity {
  id: string;
}

describe('infrastructure - DTO / ComponentResponse', () => {
  it('component API', () => {
    expect.hasAssertions();
    const response: IComponentResponse<IMockedDataEntity> = new ComponentResponse<IMockedDataEntity>({ error: null, data: { id: 'foo' } });
    expect(response).toHaveProperty('error');
    expect(response).toHaveProperty('data');
    expect(response.error).toBeNull();
    expect(response.data).toHaveProperty('id');
    expect(response.data.id).toBe('foo');
  });
  it('check constructor', () => {
    expect.hasAssertions();
    const response: IComponentResponse<IMockedDataEntity> = new ComponentResponse<IMockedDataEntity>({ data: { id: 'foo' }, error: new Error('baz') });
    expect(response).toHaveProperty('error');
    expect(response).toHaveProperty('data');
    expect(response.error).toBeInstanceOf(Error);
    expect(response.data).toHaveProperty('id');
    expect(response.data.id).toBe('foo');
  });
  it('check constructor - no params', () => {
    expect.hasAssertions();
    const response: IComponentResponse<IMockedDataEntity> = new ComponentResponse<IMockedDataEntity>();
    expect(response).toHaveProperty('error');
    expect(response).toHaveProperty('data');
    expect(response.error).toBeNull();
    expect(response.data).toBeUndefined();
  });
});
