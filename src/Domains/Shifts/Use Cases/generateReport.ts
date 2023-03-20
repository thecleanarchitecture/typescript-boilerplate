import { IComponentResponse, ComponentResponse } from '@src/Infrastructure/Utils';
import { IShift } from '@src/Domains/Shifts/Data Entity/IShift';

export const generateReport = async (facilityId: string, { repos }): Promise<IComponentResponse<IShift[]>> => {
  let data;
  let error = null;
  try {
    data = repos.Shift.getShiftsByFacility(facilityId);
  } catch (err) {
    error = err;
  }
  return Promise.resolve(new ComponentResponse<IShift[]>({
    data,
    error,
  }));
};
