import { IAgent } from '@src/Domains/Agents/Data Entity/IAgent';
import { Agent } from '@src/Domains/Agents/Data Model/Agent';
import { IComponentResponse, ComponentResponse } from '@src/Infrastructure/Utils';

export const createAgent = async (payload: IAgent, { repos }): Promise<IComponentResponse<IAgent>> => {
  let data;
  let error = null;
  try {
    const model: IAgent = new Agent(payload);
    data = repos.Agent.create(model);
  } catch (err) {
    error = err;
  }
  return Promise.resolve(new ComponentResponse<IAgent>({
    data,
    error,
  }));
};
