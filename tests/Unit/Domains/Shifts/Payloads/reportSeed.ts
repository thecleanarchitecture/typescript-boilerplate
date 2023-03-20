import { UUID } from '@src/Infrastructure/Persistence/utils';
import { Agent } from '@src/Domains/Agents/Data Model/Agent';

const AGENT1 = (new Agent({
  id: UUID.create().toString(),
  name: 'Jose Eduardo',
})).serialize();

const AGENT2 = (new Agent({
  id: UUID.create().toString(),
  name: 'James Belush',
})).serialize();

const AGENT3 = (new Agent({
  id: UUID.create().toString(),
  name: 'Joe Biden',
})).serialize();

const AGENT4 = (new Agent({
  id: UUID.create().toString(),
  name: 'Barack Obama',
})).serialize();

const facilityId = UUID.create().toString();

export const reportSeed = [
  {
    id: UUID.create().toString(),
    agents: [AGENT1, AGENT2],
    facilityId,
  },
  {
    id: UUID.create().toString(),
    agents: [AGENT2, AGENT3],
    facilityId,
  },
  {
    id: UUID.create().toString(),
    agents: [AGENT1, AGENT2, AGENT3, AGENT4],
    facilityId,
  },
  {
    id: UUID.create().toString(),
    agents: [AGENT3, AGENT4],
    facilityId: UUID.create().toString(),
  },
  {
    id: UUID.create().toString(),
    agents: [AGENT3, AGENT4],
    facilityId: UUID.create().toString(),
  },
  {
    id: UUID.create().toString(),
    agents: [AGENT3, AGENT4],
    facilityId: UUID.create().toString(),
  },
  {
    id: UUID.create().toString(),
    agents: [AGENT3, AGENT4],
    facilityId: UUID.create().toString(),
  },
];
