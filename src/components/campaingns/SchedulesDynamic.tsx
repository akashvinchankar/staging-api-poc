import React from 'react';
import { useFetchDynamicSchedulesQuery } from '../../features/campaign/seperateSlices/schedulesDynamicSlice';
import './Campaigns.css';

const IDs = [230080, 230081, 233776, 233778];

const SchedulesDynamic = () => {
  return (
    <div>
      <table>
        <thead>
          <tr>
            <th>ID</th>
            <th>Name</th>
            <th>Days</th>
          </tr>
        </thead>
        <tbody>
          {IDs.map((id) => (
            <ChildComponent key={id} id={id} />
          ))}
        </tbody>
      </table>
    </div>
  );
};

const ChildComponent = ({ id }: { id: number }) => {
  const { data: schData } = useFetchDynamicSchedulesQuery({
    id: id,
    type: 'schedule_name',
  });
  const { data: daysData } = useFetchDynamicSchedulesQuery({
    id: id,
    type: 'days',
  });

  return (
    <tr>
      <td>{id}</td>
      <td
        style={{
          color: schData ? 'initial' : 'grey',
          opacity: schData ? 1 : 0.5,
        }}
      >
        {schData ? schData.name : id}
      </td>
      <td
        style={{
          color: daysData ? 'initial' : 'grey',
          opacity: daysData ? 1 : 0.5,
        }}
      >
        {daysData ? daysData.days : id}
      </td>
    </tr>
  );
};

export default SchedulesDynamic;
