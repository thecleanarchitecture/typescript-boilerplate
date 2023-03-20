# DDD Typescript Boilerplate

Clean architectured, Infrastructure agnostic and Domain Driven designed Typescript application boilerplate.

| Status                                  |                                                               |
| ------------------------------------- | ----------------------------------------------------------------------- |
| **Test Suites**                          | [![CircleCI](https://dl.circleci.com/status-badge/img/gh/thecleanarchitecture/typescript-boilerplate/tree/master.svg?style=svg)](https://dl.circleci.com/status-badge/redirect/gh/thecleanarchitecture/typescript-boilerplate/tree/master) |
| **Code Coverage**               | [![codecov](https://codecov.io/gh/thecleanarchitecture/typescript-boilerplate/branch/master/graph/badge.svg?token=FIQF8KPQ64)](https://codecov.io/gh/thecleanarchitecture/typescript-boilerplate) |
| **Security scanner**     | ![Known Vulnerabilities](https://snyk.io/test/github/thecleanarchitecture/typescript-boilerplateg/badge.svg)                                         |

![cov](https://codecov.io/gh/thecleanarchitecture/typescript-boilerplate/branch/master/graphs/tree.svg?token=FIQF8KPQ64)

## Architecture overview

- `Design principles`
  - Domain Driven Design
  - The Clean Architecture
  - Hexagonal Architecture
  - SOLID.
  - Monolithic. Ability to quickly switch to microservice.
- `Language`: TypeScript
- `Database`: Agnostic, In Memory, Key/Value, NoSQL

## Domains

![UML classes](/domain-original.png "UML classes")

### Project Structure

    .
    ├── ...
    ├── src
    │   ├── Domains
    │   │   ├── Facilities
    │   │   │   ├── Data Entity
    │   │   │   │   ├── IFacility.js
    │   │   │   ├── Data Model
    │   │   │   │   ├── Facility.js
    │   │   │   ├── Data Repository
    │   │   │   │   ├── FacilityMongoDB.js
    │   │   │   ├── Use cases
    │   │   │
    │   │   ├── Agents
    │   │   │   ├── Data Entity
    │   │   │   │   ├── IAgent.js
    │   │   │   ├── Data Model
    │   │   │   │   ├── Agent.js
    │   │   │   ├── Data Repository
    │   │   │   │   ├── AgentMongoDB.js
    │   │   │   ├── Use cases
    │   │   │
    │   │   └── Shifts
    │   │       ├── Data Entity
    │   │       │   ├── IShift.js
    │   │       ├── Data Model
    │   │       │   ├── Shift.js
    │   │       ├── Data Repository
    │   │       │   ├── ShiftMongoDB.js
    │   │       ├── Use cases
    │   │           ├── getShiftsByFacility.js
    │   │           ├── generateReport.js
    │   │
    │   └── Infrastructure
    │       ├── Persistence
    │       │   ├── BaseRepo.ts
    │       │   ├── InMemory.ts
    │       │   ├── Paging.ts
    │       │
    │       ├── Utils
    │
    ├── tests                   # Test files
    │   
    └── ...

## How to get started

1. [Install Node.js](https://nodejs.org/en/download/)
2. Run `npm i` in this repo to install dependencies
3. Run `npm test` to run the automated tests
