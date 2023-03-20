import fs from 'fs';
import { ShiftInMemoryDataRepository } from '@src/Domains/Shifts/Data Repository/ShiftInMemoryDataRepository';
import { generateReport } from '@src/Domains/Shifts/Use Cases/generateReport';
import { IComponentResponse } from '@src/Infrastructure/Utils';
import { Shift } from '@src/Domains/Shifts/Data Model/Shift';
import { reportSeed } from '@tests/Unit/Domains/Shifts/Payloads/reportSeed';
import { IShift } from '@src/Domains/Shifts/Data Entity/IShift';

describe('generate Report - Use Case', () => {
  let repo = null;
  // eslint-disable-next-line jest/no-hooks
  beforeAll(() => {
    repo = new ShiftInMemoryDataRepository();
    // eslint-disable-next-line no-console
    // console.log(JSON.stringify(reportSeed));
    reportSeed.forEach((record) => {
      const model = new Shift(record);
      repo.create(model);
    });
  });
  it('shift record component public API', async () => {
    expect.hasAssertions();
    const { error, data }: IComponentResponse<IShift[]> = await generateReport(reportSeed[0].facilityId, { repos: { Shift: repo } });
    // eslint-disable-next-line no-console
    // console.log({ error, data });
    expect(error).toBeNull();

    expect(data[0]).toHaveProperty('id');
    expect(data[0]).toHaveProperty('facilityId');
    expect(data[0]).toHaveProperty('agents');
    expect(data[0]).toHaveProperty('startDate');
    expect(data[0]).toHaveProperty('endDate');
    expect(data[0]).toHaveProperty('createdAt');
    expect(data[0]).toHaveProperty('updatedAt');
  });

  it('check facilytId param must return the shifts for the give facilytId', async () => {
    expect.hasAssertions();
    const { error, data }: IComponentResponse<IShift[]> = await generateReport(reportSeed[0].facilityId, { repos: { Shift: repo } });
    // eslint-disable-next-line no-console
    // console.log({ error, data });
    expect(error).toBeNull();
    expect(data[0].facilityId).toBe(reportSeed[0].facilityId);
    expect(data[1].facilityId).toBe(reportSeed[0].facilityId);
    expect(data[2].facilityId).toBe(reportSeed[0].facilityId);
  });

  it('must return an error if is there no records for given facilytId', async () => {
    expect.hasAssertions();
    const { error, data }: IComponentResponse<IShift[]> = await generateReport('xxxxx', { repos: { Shift: repo } });
    // eslint-disable-next-line no-console
    // console.log({ error, data });
    expect(error).toBeInstanceOf(Error);
    expect(error.message).toBe('Facility has no shifts');
    expect(data).toBeUndefined();
  });

  it('checking agent data attributes', async () => {
    expect.hasAssertions();
    const { error, data }: IComponentResponse<IShift[]> = await generateReport(reportSeed[0].facilityId, { repos: { Shift: repo } });
    expect(error).toBeNull();
    expect(data[0]).toHaveProperty('agents');
    expect(data[0].agents[0]).toHaveProperty('id');
    expect(data[0].agents[0]).toHaveProperty('name');
    expect(data[0].agents[0]).toHaveProperty('createdAt');
    expect(data[0].agents[0]).toHaveProperty('updatedAt');

    let rows = '';
    data.forEach((record) => {
      const row = `<tr>
          <td>${record.facilityId}</td>
          <td>${record.startDate}</td>
          <td>${record.endDate}</td>
          <td>${record.agents}</td>
        </tr>`;
      rows += row;
    });
    const HTML = `
<!DOCTYPE html>
<html lang="html">
  <head><title>Shifts Report</title></head>
  <body>
    <table border="1">
      <caption>Shifts Report</caption>
      <tbody>
        <tr>
          <th><b>Facility</b></th>
          <th><b>Start Date</b></th>
          <th><b>End Date</b></th>
          <th><b>Agents</b></th>
        </tr>
        ${rows}
      </tbody>
    </table>
  </body>
</html>`;
    // eslint-disable-next-line no-console
    console.log(HTML);

    const writableStream = fs.createWriteStream('./public/storage/test.html');

    writableStream.on('error', (error) => {
      // eslint-disable-next-line no-console
      console.log(`An error occured while writing to the file. Error: ${error.message}`);
    });

    HTML.split('\n').forEach((line) => writableStream.write(`${line}\n`));
  });
});
